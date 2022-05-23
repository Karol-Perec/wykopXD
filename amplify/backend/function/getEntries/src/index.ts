/* eslint-disable import/extensions */
import { APIGatewayProxyHandler } from 'aws-lambda';
import { WykopEntry, WykopResponse } from '../../../types';
import { mapEntry } from '/opt/nodejs/dataUtils';
import WykopApiClient, { createResponse } from '/opt/nodejs/wykopApiClient';

type GetEntriesResponse = WykopResponse<WykopEntry[]>;

export const handler: APIGatewayProxyHandler = async ({ queryStringParameters }) => {
  if (!queryStringParameters?.category || !queryStringParameters?.page) {
    return createResponse('error.missingRequestParameters', 400);
  }

  return WykopApiClient.get<GetEntriesResponse>(
    `/entries/${queryStringParameters.category}/page/${queryStringParameters.page}/return/comments`,
    ({ data }) => ({ items: data.map((e) => mapEntry(e)) })
  );
};
