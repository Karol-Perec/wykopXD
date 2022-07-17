/* eslint-disable import/extensions */
import { APIGatewayProxyHandler } from 'aws-lambda';
import { WykopTagMeta, WykopMulti, WykopPaginated, WykopResponse } from '../../../types';
import { mapEntry, mapLink } from '/opt/nodejs/dataUtils';
import { createResponse, get } from '/opt/nodejs/wykopApiUtils';

type GetTagReponse = WykopResponse<WykopMulti[], WykopTagMeta> & WykopPaginated;

export const handler: APIGatewayProxyHandler = async ({
  pathParameters,
  queryStringParameters,
}) => {
  const { tag } = pathParameters || {};
  const { page = 1 } = queryStringParameters || {};
  if (!tag) return createResponse('Missing tag', 400);

  return get<GetTagReponse>(
    `/tags/index/${tag}/page/${page}/return/comments`,
    ({ data, meta }) => ({
      items: data.map((m) => (m.type === 'link' ? mapLink(m.link) : mapEntry(m.entry, true))),
      meta: {
        isObserved: meta.is_observed,
        isBlocked: meta.is_blocked,
        // isOwn: meta.is_own,
        // owner: meta.owner ? mapUser(meta.owner) : undefined,
        description: meta.description || undefined,
        backgroundUrl: meta.background || undefined,
        totalCount: meta.counters.total,
        entriesCount: meta.counters.entries,
        linksCount: meta.counters.links,
      },
    })
  );
};
