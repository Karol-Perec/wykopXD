/* eslint-disable import/extensions */
import { APIGatewayProxyHandler } from 'aws-lambda';
import { WykopLink, WykopResponse } from '../../../types';
import axios from '/opt/nodejs/axios';
import { createResponse } from '/opt/nodejs/lambdaUtils';
import { mapLink } from '/opt/nodejs/dataUtils';

export const handler: APIGatewayProxyHandler = async ({ queryStringParameters }) => {
  if (!queryStringParameters?.period || !queryStringParameters?.page) {
    return createResponse('error.missingRequestParameters', 400);
  }

  const { data } = await axios.get<WykopResponse<WykopLink[]>>(
    `/hits/${queryStringParameters.period}/page/${queryStringParameters.page}`
  );

  if (data.error) {
    return createResponse(data.error.message_en, 500);
  }

  const entries = data.data.map((l) => mapLink(l));

  return createResponse(entries, 200);
};