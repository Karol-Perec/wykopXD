/* eslint-disable import/extensions */
import { APIGatewayProxyHandler } from 'aws-lambda';
import { WykopLink, WykopResponse } from '../../../types';
import { mapLink } from '/opt/nodejs/dataUtils';
import WykopApiClient, { createResponse } from '/opt/nodejs/wykopApiClient';

type GetLinkResponse = WykopResponse<WykopLink>;

export const handler: APIGatewayProxyHandler = async ({ pathParameters }) => {
  if (!pathParameters?.id) {
    return createResponse('error.missingRequestParameters', 400);
  }

  return WykopApiClient.get<GetLinkResponse>(
    `/links/link/${pathParameters?.id}/withcomments/true`,
    ({ data }) => mapLink(data)
  );
};
