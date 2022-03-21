/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/extensions */
import { APIGatewayProxyHandler } from 'aws-lambda';
import { WykopEntry, WykopResponse } from 'types';
import { getAxiosInstance } from '/opt/nodejs/axios';
import { createResponse } from '/opt/nodejs/lambdaUtils';
import { mapEntry } from '/opt/nodejs/dataUtils';

export const handler: APIGatewayProxyHandler = async ({ pathParameters }) => {
  if (!pathParameters?.id) {
    return createResponse('error.missingRequestParameters', 400);
  }

  const axios = getAxiosInstance({
    apiKey: process.env.API_KEY,
    secret: process.env.SECRET,
    owmApiKey: process.env.OWM_API_KEY,
  });

  const { data } = await axios.get<WykopResponse<WykopEntry>>(
    `/entries/entry/${pathParameters.id}`
  );

  if (data.error) {
    return createResponse(data.error, 500);
  }

  const link = mapEntry(data.data);

  return createResponse(link, 200);
};
