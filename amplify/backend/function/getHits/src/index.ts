/* eslint-disable import/extensions */
import { APIGatewayProxyHandler } from 'aws-lambda';
import { WykopLink, WykopResponse } from '../../../types';
import { mapLink } from '/opt/nodejs/dataUtils';
import WykopApiClient, { createResponse } from '/opt/nodejs/wykopApiClient';

type GetHitsResponse = WykopResponse<WykopLink[]>;

export const handler: APIGatewayProxyHandler = async ({ queryStringParameters }) => {
  if (!queryStringParameters?.period || !queryStringParameters?.page) {
    return createResponse('error.missingRequestParameters', 400);
  }

  return WykopApiClient.get<GetHitsResponse>(
    `/hits/${queryStringParameters.period}/page/${queryStringParameters.page}`,
    ({ data }) => ({ items: data.map((l) => mapLink(l)) })
  );
};
