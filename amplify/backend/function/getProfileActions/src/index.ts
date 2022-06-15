/* eslint-disable import/extensions */
import { APIGatewayProxyHandler } from 'aws-lambda';
import { WykopMulti, WykopPaginated, WykopResponse } from '../../../types';
import { mapEntry, mapLink } from '/opt/nodejs/dataUtils';
import { createResponse, get } from '/opt/nodejs/wykopApiUtils';

type GetProfileActionsResponse = WykopResponse<WykopMulti[]> & WykopPaginated;

export const handler: APIGatewayProxyHandler = async ({
  pathParameters,
  queryStringParameters,
}) => {
  if (!pathParameters?.username) {
    return createResponse('Missing username', 400);
  }

  return get<GetProfileActionsResponse>(
    `/profiles/actions/${pathParameters.username}/page/${
      Number(queryStringParameters?.page || 1) + 1 // wykop response for pages 1 and 2 is the same
    }/return/comments`,
    ({ data }) => ({
      items: data.map((m) => (m.type === 'link' ? mapLink(m.link) : mapEntry(m.entry))),
    })
  );
};
