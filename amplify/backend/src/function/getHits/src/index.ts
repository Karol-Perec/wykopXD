/* eslint-disable import/no-absolute-path */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable import/no-extraneous-dependencies */
import { Handler, APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { WykopLink, WykopResponse } from 'types';
import { getAxiosInstance } from '/opt/nodejs/axios';
import { createResponse } from '/opt/nodejs/lambdaUtils';
import { mapLink } from '/opt/nodejs/dataUtils';

export const handler: Handler<APIGatewayProxyEvent, APIGatewayProxyResult> = async (event) => {
  const axios = getAxiosInstance({
    apiKey: process.env.API_KEY,
    secret: process.env.SECRET,
    owmApiKey: process.env.OWM_API_KEY,
  });

  const { data } = await axios.get<WykopResponse<WykopLink[]>>(
    `/hits/${event.queryStringParameters?.period}/page/${event.queryStringParameters?.page}/output/clear`
  );

  if (data.error) return createResponse(data.error, 400);

  const entries = data.data.map((l) => mapLink(l));

  return createResponse(entries, 200);
};
