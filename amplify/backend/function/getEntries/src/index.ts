import { Handler, APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { WykopEntry, WykopResponse } from '@wykop-types';
import { getAxiosInstance } from '/opt/nodejs/axios';
import { createResponse } from '/opt/nodejs/lambdaUtils';
import { mapEntry } from '/opt/nodejs/dataUtils';

export const handler: Handler<APIGatewayProxyEvent, APIGatewayProxyResult> = async (event) => {
  const { API_KEY, SECRET, OWM_API_KEY } = process.env;
  const axios = getAxiosInstance(API_KEY!, SECRET!, OWM_API_KEY!);

  const { data } = await axios.get<WykopResponse<WykopEntry[]>>(
    `/entries/${event.queryStringParameters?.category}/page/${event.queryStringParameters?.page}/return/comments/output/clear`
  );

  if (data.error) return createResponse(data.error, 400);

  const entries = data.data.map((e) => mapEntry(e));

  return createResponse(entries, 200);
};
