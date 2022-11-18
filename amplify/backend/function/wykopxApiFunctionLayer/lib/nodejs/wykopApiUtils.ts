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
  const isPost = config.method === 'post' || config.method === 'POST';

  if (isPost || !process.env.OWM_API_KEY) {
    config.url += `/appkey/${process.env.API_KEY}`;
    const signContent =
      process.env.SECRET! +
      config.baseURL +
      config.url +
      (config.data ? Object.values(config.data).join(',') : '');
    config.headers = {
      ...config.headers,
      apisign: MD5(signContent).toString(),
    };
  } else {
    config.url += `/appkey/${process.env.OWM_API_KEY}`;
  }

  if (isPost) {
    config.data = new URLSearchParams(config.data);
  }

  return config;
});

export const get = async <D>(url: string, dataMapper: (responseData: D) => unknown) => {
  const { data } = await wykopAxiosInstance.get<D | WykopErrorResponse>(url);

  if ('error' in data) return createResponse(data.error.message_pl, 500);

  return createResponse(dataMapper(data), 200);
};

export const post = async <D>(
  url: string,
  body: unknown,
  dataMapper?: (responseData: D) => unknown
) => {
  const { data } = await wykopAxiosInstance.post<D | WykopErrorResponse>(url, body);

  if ('error' in data) return createResponse(data.error.message_pl, 500);

  return createResponse(dataMapper ? dataMapper(data) : data, 200);
};
