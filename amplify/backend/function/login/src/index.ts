/* eslint-disable import/extensions */
import { APIGatewayProxyHandler } from 'aws-lambda';
import { MD5 } from 'crypto-js';
import { WykopProfile, WykopResponse } from '../../../types';
import { mapUser } from '../../wykopxApiFunctionLayer/lib/nodejs/dataUtils';
import { createResponse, post } from '/opt/nodejs/wykopApiUtils';

type LoginResponse = WykopResponse<{
  profile: WykopProfile;
  userkey: string;
}>;

interface ConnectData {
  appkey: string;
  sign: string;
  login: string;
  token: string;
}

export const handler: APIGatewayProxyHandler = async ({ body }) => {
  const connectData: string = (body as any)?.connectData;
  if (!connectData) {
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
    (d) => ({
      profile: mapUser(d.data.profile),
      userkey: d.data.userkey,
      accountkey: token,
    })
  );
};
