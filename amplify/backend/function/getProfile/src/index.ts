/* eslint-disable import/extensions */
import { APIGatewayProxyHandler } from 'aws-lambda';
import { WykopProfile, WykopResponse } from '../../../types';
import WykopApiClient, { createResponse } from '/opt/nodejs/wykopApiClient';

type GetProfileResponse = WykopResponse<WykopProfile>;

export const handler: APIGatewayProxyHandler = async ({ pathParameters }) => {
  if (!pathParameters?.username) {
    return createResponse('error.missingRequestParameters', 400);
  }

  return WykopApiClient.get<GetProfileResponse>(
    `/profiles/${pathParameters.username}`,
    ({ data }) => data
  );
};
