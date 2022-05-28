/* eslint-disable import/extensions */
import { APIGatewayProxyHandler } from 'aws-lambda';
import { MD5 } from 'crypto-js';
import { WykopResponse } from '../../../types';
import { createResponse, post } from '/opt/nodejs/wykopApiUtils';

type LoginResponse = WykopResponse<{
  profile: string;
  token: string;
}>;

interface ConnectData {
  appkey: string;
  sign: string;
  login: string;
  token: string;
}

export const handler: APIGatewayProxyHandler = async ({ body }) => {
  const connectData: string = (body as any)?.connectData;
  if (connectData) {
    return createResponse('Missing connect data', 400);
  }

  const { appkey, login, sign, token } = JSON.parse(
    Buffer.from(connectData, 'base64').toString()
  ) as ConnectData;

  if (appkey !== process.env.API_KEY) {
    return createResponse('Wrong application', 400);
  }
  if (sign !== MD5(process.env.SECRET + appkey + login + token).toString()) {
    return createResponse('Manipulated connect data', 400);
  }

  return post<LoginResponse>(
    '/login/index',
    {
      login,
      accountkey: token,
    },
    (d) => d.data
  );
};
