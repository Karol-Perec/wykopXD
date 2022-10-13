/* eslint-disable import/extensions */
import { APIGatewayProxyHandler } from 'aws-lambda';
import { WykopEntry, WykopResponse } from '../../../types';
import { mapEntry } from '/opt/nodejs/dataUtils';
import { createResponse, get } from '/opt/nodejs/wykopApiUtils';

type GetEntryResponse = WykopResponse<WykopEntry>;

export const handler: APIGatewayProxyHandler = async ({ pathParameters }) => {
  const { id } = pathParameters || {};
  if (!id) return createResponse('Missing entry ID', 400);

  return get<GetEntryResponse>(`/entries/entry/${id}`, ({ data }) => mapEntry(data));
};
