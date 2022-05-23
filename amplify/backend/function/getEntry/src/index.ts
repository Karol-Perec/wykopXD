/* eslint-disable import/extensions */
import { APIGatewayProxyHandler } from 'aws-lambda';
import { WykopEntry, WykopResponse } from '../../../types';
import { mapEntry } from '/opt/nodejs/dataUtils';
import { createResponse, get } from '/opt/nodejs/wykopApiUtils';

type GetEntryResponse = WykopResponse<WykopEntry>;

export const handler: APIGatewayProxyHandler = async ({ pathParameters }) => {
  if (!pathParameters?.id) {
    return createResponse('error.missingRequestParameters', 400);
  }

  return get<GetEntryResponse>(`/entries/entry/${pathParameters.id}`, ({ data }) =>
    mapEntry(data)
  );
};
