/* eslint-disable import/extensions */
import { APIGatewayProxyHandler } from 'aws-lambda';
import { MD5 } from 'crypto-js';
import { createResponse } from '/opt/nodejs/wykopApiUtils';

export const handler: APIGatewayProxyHandler = async ({
  queryStringParameters: { redirectUrl },
}) => {
  if (!redirectUrl) return createResponse('Missing redirectUrl', 400);

  const encodedRedirectUrl = encodeURIComponent(Buffer.from(redirectUrl).toString('base64'));
  const sign = MD5(process.env.SECRET + redirectUrl);
  const url = `https://a2.wykop.pl/login/connect/appkey/${process.env.API_KEY}/redirect/${encodedRedirectUrl}/secure/${sign}`;

  return createResponse(url, 200);
};
