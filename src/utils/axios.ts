import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://90258gwync.execute-api.eu-central-1.amazonaws.com/dev',
});

export default axiosInstance;
