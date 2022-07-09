/* eslint-disable import/extensions */
import { APIGatewayProxyHandler } from 'aws-lambda';
import { WykopLink, WykopPaginated, WykopResponse } from '../../../types';
import { createResponse, get } from '/opt/nodejs/wykopApiUtils';
import { mapLink } from '/opt/nodejs/dataUtils';

type GetLinksResponse = WykopResponse<WykopLink[]> & WykopPaginated;

export const handler: APIGatewayProxyHandler = async ({
  queryStringParameters: { category, page, sort },
}) => {
  if (!category) return createResponse('Missing category', 400);

  return get<GetLinksResponse>(
    `/links/${category}/page/${page || 1}/${sort || ''}`,
    ({ data }) => ({ items: data.map((l) => mapLink(l)) })
  );
};
