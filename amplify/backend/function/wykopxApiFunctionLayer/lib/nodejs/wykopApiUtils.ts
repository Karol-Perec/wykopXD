// eslint-disable-next-line import/no-extraneous-dependencies
import { APIGatewayProxyResult } from 'aws-lambda';
import axios from 'axios';
import { MD5 } from 'crypto-js';
import { WykopErrorResponse } from '../../../../types';

export const createResponse = (body: unknown, statusCode: number): APIGatewayProxyResult => ({
  statusCode,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
  },
  body: JSON.stringify(body),
});

const wykopAxiosInstance = axios.create({ baseURL: 'https://a2.wykop.pl' });

wykopAxiosInstance.interceptors.request.use((config) => {
  if (config.method === 'POST' || !process.env.OWM_API_KEY) {
    config.url += `/appkey/${process.env.API_KEY}`;
    const signContent =
      process.env.SECRET! +
      config.url +
      (config.data ? Object.values(config.data).join(',') : '');
    const apiSign = MD5(signContent).toString();
    config.headers = { ...config.headers, apisign: apiSign };
  } else {
    config.url += `/appkey/${process.env.OWM_API_KEY}`;
  }

  return config;
});

export const get = async <D>(url: string, dataMapper: (responseData: D) => unknown) => {
  const { data } = await wykopAxiosInstance.get<D | WykopErrorResponse>(url);

  if ((data as WykopErrorResponse).error) {
    return createResponse((data as WykopErrorResponse).error.message_en, 500);
  }

  return createResponse(dataMapper(data as D), 200);
};

export const post = async <D>(
  url: string,
  body: unknown,
  dataMapper?: (responseData: D) => unknown
) => {
  const { data } = await wykopAxiosInstance.post<D | WykopErrorResponse>(url, body);

  if ((data as WykopErrorResponse).error) {
    return createResponse((data as WykopErrorResponse).error.message_en, 500);
  }

  return createResponse(dataMapper ? dataMapper(data as D) : data, 200);
};
