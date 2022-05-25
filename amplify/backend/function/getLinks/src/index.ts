/* eslint-disable import/extensions */
import { APIGatewayProxyHandler } from 'aws-lambda';
import { WykopLink, WykopPaginated, WykopResponse } from '../../../types';
import { createResponse, get } from '/opt/nodejs/wykopApiUtils';
import { mapLink } from '/opt/nodejs/dataUtils';

type GetLinksResponse = WykopResponse<WykopLink[]> & WykopPaginated;

export const handler: APIGatewayProxyHandler = async ({ queryStringParameters }) => {
  if (!queryStringParameters?.page || !queryStringParameters?.category) {
    return createResponse('error.missingRequestParameters', 400);
  }

  return get<GetLinksResponse>(
    `/links/${queryStringParameters.category}/page/${queryStringParameters.page}`,
    ({ data }) => ({ items: data.map((l) => mapLink(l)) })
  );
};
