/* eslint-disable import/extensions */
import { APIGatewayProxyHandler } from 'aws-lambda';
import { WykopLink, WykopResponse } from '../../../types';
import { mapLink } from '/opt/nodejs/dataUtils';
import { createResponse, get } from '/opt/nodejs/wykopApiUtils';

type GetLinkResponse = WykopResponse<WykopLink>;

export const handler: APIGatewayProxyHandler = async ({ pathParameters }) => {
  if (!pathParameters?.id) {
    return createResponse('Missing link ID', 400);
  }

  return get<GetLinkResponse>(`/links/link/${pathParameters.id}/withcomments/true`, ({ data }) =>
    mapLink(data)
  );
};
