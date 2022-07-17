/* eslint-disable import/extensions */
import { APIGatewayProxyHandler } from 'aws-lambda';
import { WykopLink, WykopPaginated, WykopResponse } from '../../../types';
import { createResponse, get } from '/opt/nodejs/wykopApiUtils';
import { mapLink } from '/opt/nodejs/dataUtils';

type GetLinksResponse = WykopResponse<WykopLink[]> & WykopPaginated;

export const handler: APIGatewayProxyHandler = async ({ queryStringParameters }) => {
  const { type, page = 1, category } = queryStringParameters || {};
  if (!type) return createResponse('Missing links type', 400);

  return get<GetLinksResponse>(
    `/links/${type}/page/${page}${category ? `/sort/${category}` : ''}`,
    ({ data }) => ({ items: data.map((l) => mapLink(l)) })
  );
};
