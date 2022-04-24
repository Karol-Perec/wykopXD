import axios from 'axios';
import { MD5 } from 'crypto-js';

const wykopAxiosInstance = axios.create({ baseURL: 'https://a2.wykop.pl' });

wykopAxiosInstance.interceptors.request.use((config) => {
  if (config.method === 'POST') {
    config.url += `/appkey/${process.env.API_KEY}`;
    const signContent =
      process.env.SECRET! + config.baseURL + config.url + Object.values(config.data).join(',');
    const apiSign = MD5(signContent).toString();
    config.headers = { ...config.headers, apisign: apiSign };
  } else {
    config.url += `/appkey/${process.env.OWM_API_KEY}`;
  }

  return config;
});

export default wykopAxiosInstance;
