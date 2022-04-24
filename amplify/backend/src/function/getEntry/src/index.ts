/* eslint-disable import/extensions */
import { APIGatewayProxyHandler } from 'aws-lambda';
import { WykopEntry, WykopResponse } from '../../../types';
import axios from '/opt/nodejs/axios';
import { createResponse } from '/opt/nodejs/lambdaUtils';
import { mapEntry } from '/opt/nodejs/dataUtils';

export const handler: APIGatewayProxyHandler = async ({ pathParameters }) => {
  if (!pathParameters?.id) {
    return createResponse('error.missingRequestParameters', 400);
  }

  const { data } = await axios.get<WykopResponse<WykopEntry>>(
    `/entries/entry/${pathParameters.id}`
  );

  if (data.error) {
    return createResponse(data.error, 500);
  }

  const entry = mapEntry(data.data);

  return createResponse(entry, 200);
};
