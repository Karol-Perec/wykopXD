/* eslint-disable import/extensions */
import { APIGatewayProxyHandler } from 'aws-lambda';
import { WykopEntry, WykopResponse } from '../../../types';
import { mapEntry } from '/opt/nodejs/dataUtils';
import { createResponse, get } from '/opt/nodejs/wykopApiUtils';

type GetEntriesResponse = WykopResponse<WykopEntry[]>;

export const handler: APIGatewayProxyHandler = async ({ queryStringParameters, headers }) => {
  const { category, page = 1 } = queryStringParameters || {};
  if (!category) return createResponse('Missing category', 400);

  return get<GetEntriesResponse>(
    `/entries/${category}/page/${page}/return/comments`,
    headers?.userkey,
    ({ data }) => ({ items: data.map((e) => mapEntry(e)) })
  );
};
