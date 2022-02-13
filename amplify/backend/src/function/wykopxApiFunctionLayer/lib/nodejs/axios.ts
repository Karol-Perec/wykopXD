import axios from 'axios';
import { MD5 } from 'crypto-js';

export const getAxiosInstance = (apiKey: string, secret: string, owmApiKey: string) => {
  const axiosInstance = axios.create({ baseURL: 'https://a2.wykop.pl' });

  axiosInstance.interceptors.request.use((config) => {
    if (config.method === 'POST') {
      config.url += `/appkey/${apiKey}`;
      const signContent =
        secret + config.baseURL + config.url + Object.values(config.data).join(',');
      const apiSign = MD5(signContent).toString();
      config.headers = { ...config.headers, apisign: apiSign };
    } else {
      config.url += `/appkey/${owmApiKey}`;
    }

    return config;
  });

  return axiosInstance;
};
