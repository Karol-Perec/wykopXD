/* eslint-disable import/extensions */
import { APIGatewayProxyHandler } from 'aws-lambda';
import { WykopEntry, WykopResponse } from '../../../types';
import { mapEntry } from '/opt/nodejs/dataUtils';
import { createResponse, get } from '/opt/nodejs/wykopApiUtils';

type GetEntriesResponse = WykopResponse<WykopEntry[]>;

export const handler: APIGatewayProxyHandler = async ({ queryStringParameters }) => {
  const { category, page = 1 } = queryStringParameters || {};
  if (!category) return createResponse('Missing category', 400);

  // eslint-disable-next-line no-console
  console.log(queryStringParameters);

  return get<GetEntriesResponse>(
    `/entries/${category}/page/${page}/return/comments`,
    ({ data }) => ({ items: data.map((e) => mapEntry(e)) })
  );
};
