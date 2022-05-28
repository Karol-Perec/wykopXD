/* eslint-disable import/extensions */
import { APIGatewayProxyHandler } from 'aws-lambda';
import { WykopEntry, WykopResponse } from '../../../types';
import { mapEntry } from '/opt/nodejs/dataUtils';
import { createResponse, get } from '/opt/nodejs/wykopApiUtils';

type GetEntriesResponse = WykopResponse<WykopEntry[]>;

export const handler: APIGatewayProxyHandler = async ({ queryStringParameters }) => {
  if (!queryStringParameters?.category) {
    return createResponse('Missing category', 400);
  }

  return get<GetEntriesResponse>(
    `/entries/${queryStringParameters.category}/page/${
      queryStringParameters.page || 1
    }/return/comments`,
    ({ data }) => ({ items: data.map((e) => mapEntry(e)) })
  );
};
