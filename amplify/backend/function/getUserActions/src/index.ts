/* eslint-disable import/extensions */
import { APIGatewayProxyHandler } from 'aws-lambda';
import { WykopMulti, WykopPaginated, WykopResponse } from '../../../types';
import { mapEntry, mapLink } from '/opt/nodejs/dataUtils';
import { createResponse, get } from '/opt/nodejs/wykopApiUtils';

type GetProfileActionsResponse = WykopResponse<WykopMulti[]> & WykopPaginated;

export const handler: APIGatewayProxyHandler = async ({
  pathParameters,
  queryStringParameters,
  headers,
}) => {
  const { username } = pathParameters || {};
  const { page = 1 } = queryStringParameters || {};
  if (!username) return createResponse('Missing username', 400);

  return get<GetProfileActionsResponse>(
    `/profiles/actions/${username}/page/${+page + 1}/return/comments`,
    headers?.Authorization,
    ({ data }) => ({
      items: data.map((m) => (m.type === 'link' ? mapLink(m.link) : mapEntry(m.entry, true))),
    })
  );
};
