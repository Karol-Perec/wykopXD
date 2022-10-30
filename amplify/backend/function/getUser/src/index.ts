/* eslint-disable import/extensions */
import { APIGatewayProxyHandler } from 'aws-lambda';
import { WykopProfile, WykopResponse } from '../../../types';
import { mapUserFull } from '/opt/nodejs/dataUtils';
import { createResponse, get } from '/opt/nodejs/wykopApiUtils';

type GetProfileResponse = WykopResponse<WykopProfile>;

export const handler: APIGatewayProxyHandler = async ({ pathParameters }) => {
  const { username } = pathParameters || {};
  if (!username) return createResponse('Missing username', 400);

  return get<GetProfileResponse>(`/profiles/${username}`, ({ data }) => mapUserFull(data));
};
