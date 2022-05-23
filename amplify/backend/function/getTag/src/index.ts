/* eslint-disable import/extensions */
import { APIGatewayProxyHandler } from 'aws-lambda';
import { WykopTagMeta, WykopMulti, WykopPaginated, WykopResponse } from '../../../types';
import { mapEntry, mapLink } from '/opt/nodejs/dataUtils';
import WykopApiClient, { createResponse } from '/opt/nodejs/wykopApiClient';

type GetTagReponse = WykopResponse<WykopMulti[], WykopTagMeta> & WykopPaginated;

export const handler: APIGatewayProxyHandler = async ({
  pathParameters,
  queryStringParameters,
}) => {
  if (!pathParameters?.tag || !queryStringParameters?.page) {
    return createResponse('error.missingRequestParameters', 400);
  }

  return WykopApiClient.get<GetTagReponse>(
    `/tags/index/${pathParameters.tag}/page/${queryStringParameters.page}/return/comments`,
    ({ data, meta }) => ({
      items: data.map((m) => (m.type === 'link' ? mapLink(m.link) : mapEntry(m.entry))),
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
