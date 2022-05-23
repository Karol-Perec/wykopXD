/* eslint-disable import/extensions */
import { APIGatewayProxyHandler } from 'aws-lambda';
import { WykopLink, WykopResponse } from '../../../types';
import { mapLink } from '/opt/nodejs/dataUtils';
import { createResponse, get } from '/opt/nodejs/wykopApiUtils';

type GetHitsResponse = WykopResponse<WykopLink[]>;

export const handler: APIGatewayProxyHandler = async ({ queryStringParameters }) => {
  if (!queryStringParameters?.period || !queryStringParameters?.page) {
    return createResponse('error.missingRequestParameters', 400);
  }

  return get<GetHitsResponse>(
    `/hits/${queryStringParameters.period}/page/${queryStringParameters.page}`,
    ({ data }) => ({ items: data.map((l) => mapLink(l)) })
  );
};
