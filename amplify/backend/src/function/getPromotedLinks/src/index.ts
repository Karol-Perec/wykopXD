/* eslint-disable import/extensions */
import { APIGatewayProxyHandler } from 'aws-lambda';
import { WykopLink, WykopResponse } from '../../../types';
import axios from '/opt/nodejs/axios';
import { createResponse } from '/opt/nodejs/lambdaUtils';
import { mapLink } from '/opt/nodejs/dataUtils';

export const handler: APIGatewayProxyHandler = async ({ queryStringParameters }) => {
  if (!queryStringParameters?.page) {
    return createResponse('error.missingRequestParameters', 400);
  }

  const { data } = await axios.get<WykopResponse<WykopLink[]>>(
    `/links/promoted/page/${queryStringParameters.page}`
  );

  if (data.error) {
    return createResponse(data.error, 500);
  }

  const links = data.data.map((l) => mapLink(l));

  return createResponse(links, 200);
};
