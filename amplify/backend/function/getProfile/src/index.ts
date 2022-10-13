/* eslint-disable import/extensions */
import { APIGatewayProxyHandler } from 'aws-lambda';
import { WykopProfile, WykopResponse } from '../../../types';
import { createResponse, get } from '/opt/nodejs/wykopApiUtils';

type GetProfileResponse = WykopResponse<WykopProfile>;

export const handler: APIGatewayProxyHandler = async ({ pathParameters }) => {
  const { username } = pathParameters || {};
  if (!username) return createResponse('Missing username', 400);

  // eslint-disable-next-line no-console
  console.log(pathParameters);

  return get<GetProfileResponse>(`/profiles/${username}`, ({ data }) => data);
};
