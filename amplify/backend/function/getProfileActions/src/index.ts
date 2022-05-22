/* eslint-disable import/extensions */
import { APIGatewayProxyHandler } from 'aws-lambda';
import { WykopMulti, WykopResponse } from '../../../types';
import axios from '/opt/nodejs/axios';
import { createResponse } from '/opt/nodejs/lambdaUtils';
import { mapEntry, mapLink } from '/opt/nodejs/dataUtils';

export const handler: APIGatewayProxyHandler = async ({
  pathParameters,
  queryStringParameters,
}) => {
  if (!pathParameters?.username || !queryStringParameters?.page) {
    return createResponse('error.missingRequestParameters', 400);
  }

  const { data } = await axios.get<WykopResponse<WykopMulti[]>>(
    `/profiles/actions/${pathParameters.username}/page/${queryStringParameters.page}/return/comments`
  );

  if (data.error) {
    return createResponse(data.error.message_en, 500);
  }

  const content = data.data.map((m) => (m.type === 'link' ? mapLink(m.link) : mapEntry(m.entry)));

  return createResponse(content, 200);
};
