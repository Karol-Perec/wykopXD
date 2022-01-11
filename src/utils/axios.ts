import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://x0rzbejrn6.execute-api.eu-central-1.amazonaws.com/dev/',
});

export default axiosInstance;
