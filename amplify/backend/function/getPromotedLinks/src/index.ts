import { Handler, APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { WykopLink, WykopResponse } from '@wykop-types';
import { getAxiosInstance } from '/opt/nodejs/axios';
import { createResponse } from '/opt/nodejs/lambdaUtils';
import { mapLink } from '/opt/nodejs/dataUtils';

export const handler: Handler<APIGatewayProxyEvent, APIGatewayProxyResult> = async (event) => {
  const { API_KEY, SECRET, OWM_API_KEY } = process.env;
  const axios = getAxiosInstance(API_KEY!, SECRET!, OWM_API_KEY!);

  const { data } = await axios.get<WykopResponse<WykopLink[]>>(
    `/links/promoted/page/${event.queryStringParameters?.page}/output/clear`
  );

  if (data.error) return createResponse(data.error, 400);

  const links = data.data.map((l) => mapLink(l));

  return createResponse(links, 200);
};
