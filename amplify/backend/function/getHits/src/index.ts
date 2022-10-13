/* eslint-disable import/extensions */
import { APIGatewayProxyHandler } from 'aws-lambda';
import { WykopLink, WykopResponse } from '../../../types';
import { mapLink } from '/opt/nodejs/dataUtils';
import { createResponse, get } from '/opt/nodejs/wykopApiUtils';

type GetHitsResponse = WykopResponse<WykopLink[]>;

export const handler: APIGatewayProxyHandler = async ({ queryStringParameters }) => {
  const { category, page = 1, year, month } = queryStringParameters || {};
  if (!category) return createResponse('Missing category', 400);

  // eslint-disable-next-line no-console
  console.log(queryStringParameters);

  const yearFilter =
    category === 'year' || category === 'month' ? `/${year || new Date().getFullYear()}` : '';
  const monthFilter = category === 'month' ? `/${month || new Date().getMonth()}` : '';

  return get<GetHitsResponse>(
    `/hits/${category}${yearFilter}${monthFilter}/page/${page}`,
    ({ data }) => ({ items: data.map((l) => mapLink(l)) })
  );
};
