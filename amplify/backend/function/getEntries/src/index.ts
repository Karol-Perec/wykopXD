/* eslint-disable import/extensions */
import { APIGatewayProxyHandler } from 'aws-lambda';
import { WykopEntry, WykopResponse } from '../../../types';
import { mapEntry } from '/opt/nodejs/dataUtils';
import { createResponse, get } from '/opt/nodejs/wykopApiUtils';

type GetEntriesResponse = WykopResponse<WykopEntry[]>;

export const handler: APIGatewayProxyHandler = async ({
  queryStringParameters: { sort, page },
}) => {
  if (!sort) return createResponse('Missing sorting', 400);

  return get<GetEntriesResponse>(
    `/entries/${sort}/page/${page || 1}/return/comments`,
    ({ data }) => ({ items: data.map((e) => mapEntry(e)) })
  );
};
