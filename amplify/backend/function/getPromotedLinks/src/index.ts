/* eslint-disable import/extensions */
import { APIGatewayProxyHandler } from 'aws-lambda';
import { WykopLink, WykopPaginated, WykopResponse } from '../../../types';
import WykopApiClient, { createResponse } from '/opt/nodejs/wykopApiClient';
import { mapLink } from '/opt/nodejs/dataUtils';

type GetPromotedLinksResponse = WykopResponse<WykopLink[]> & WykopPaginated;

export const handler: APIGatewayProxyHandler = async ({ queryStringParameters }) => {
  if (!queryStringParameters?.page) {
    return createResponse('error.missingRequestParameters', 400);
  }

  return WykopApiClient.get<GetPromotedLinksResponse>(
    `/links/promoted/page/${queryStringParameters.page}`,
    ({ data }) => ({ items: data.map((l) => mapLink(l)) })
  );
};
