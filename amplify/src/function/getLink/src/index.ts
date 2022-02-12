import { Handler, APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { WykopLink, WykopResponse } from 'types';
import { getAxiosInstance } from '/opt/nodejs/axios';
import { createResponse } from '/opt/nodejs/lambdaUtils';
import { mapLink } from '/opt/nodejs/dataUtils';

export const handler: Handler<APIGatewayProxyEvent, APIGatewayProxyResult> = async (event) => {
  const { API_KEY, SECRET, OWM_API_KEY } = process.env;
  const axios = getAxiosInstance(API_KEY!, SECRET!, OWM_API_KEY!);

  const { data } = await axios.get<WykopResponse<WykopLink>>(
    `/links/link/${event.pathParameters?.id}/withcomments/true/output/clear`
  );

  if (data.error) return createResponse(data.error, 400);

  const link = mapLink(data.data);

  return createResponse(link, 200);
};
