/* eslint-disable import/extensions */
import { APIGatewayProxyHandler } from 'aws-lambda';
import { MD5 } from 'crypto-js';
import { createResponse } from '/opt/nodejs/wykopApiUtils';

export const handler: APIGatewayProxyHandler = async ({ queryStringParameters }) => {
  if (!queryStringParameters?.redirectUrl) {
    return createResponse('error.missingRequestParameters', 400);
  }

  let url = `https://a2.wykop.pl/login/connect/appkey/${process.env.API_KEY}`;

  url += `/redirect/${encodeURIComponent(
    Buffer.from(queryStringParameters.redirectUrl, 'base64').toString()
  )}`;
  url += `/secure/${MD5(process.env.SECRET + queryStringParameters.redirectUrl)}`;

  return createResponse(url, 200);
};
