/* eslint-disable import/extensions */
import { APIGatewayProxyHandler } from 'aws-lambda';
import { WykopEntry, WykopResponse } from '../../../types';
import axios from '/opt/nodejs/axios';
import { createResponse } from '/opt/nodejs/lambdaUtils';
import { mapEntry } from '/opt/nodejs/dataUtils';

export const handler: APIGatewayProxyHandler = async ({ queryStringParameters }) => {
  if (!queryStringParameters?.category || !queryStringParameters?.page) {
    return createResponse('error.missingRequestParameters', 400);
  }

  const { data } = await axios.get<WykopResponse<WykopEntry[]>>(
    `/entries/${queryStringParameters.category}/page/${queryStringParameters.page}/return/comments`
  );

  if (data.error) {
    return createResponse(data.error.message_en, 500);
  }

  const entries = data.data.map((e) => mapEntry(e));

  return createResponse(entries, 200);
};
