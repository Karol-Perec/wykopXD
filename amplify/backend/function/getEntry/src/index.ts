/* eslint-disable import/extensions */
import { APIGatewayProxyHandler } from 'aws-lambda';
import { WykopEntry, WykopResponse } from '../../../types';
import { mapEntry } from '/opt/nodejs/dataUtils';
import { createResponse, get } from '/opt/nodejs/wykopApiUtils';

type GetEntryResponse = WykopResponse<WykopEntry>;

export const handler: APIGatewayProxyHandler = async ({ pathParameters, headers }) => {
  const { id } = pathParameters || {};
  if (!id) return createResponse('Missing entry ID', 400);

  return get<GetEntryResponse>(`/entries/entry/${id}`, headers?.Authorization, ({ data }) =>
    mapEntry(data)
  );
};
