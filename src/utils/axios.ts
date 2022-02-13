import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://ye4bccor0b.execute-api.eu-central-1.amazonaws.com/dev',
});

export default axiosInstance;
