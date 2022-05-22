/* eslint-disable import/extensions */
import { APIGatewayProxyHandler } from 'aws-lambda';
import { WykopResponse } from '../../../types';
import axios from '/opt/nodejs/axios';
import { createResponse } from '/opt/nodejs/lambdaUtils';

export const handler: APIGatewayProxyHandler = async ({ pathParameters }) => {
  if (!pathParameters?.username) {
    return createResponse('error.missingRequestParameters', 400);
  }

  const { data } = await axios.get<WykopResponse<any>>(
    `/profiles/actions/${pathParameters.username}/page`
  );

  if (data.error) {
    return createResponse(data.error.message_en, 500);
  }

  return createResponse(data.data, 200);
};
