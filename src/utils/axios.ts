import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://fjwdpcmaq4.execute-api.eu-central-1.amazonaws.com/dev',
});

export default axiosInstance;
