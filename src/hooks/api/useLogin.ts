import { useMutation } from 'react-query';
import axios from 'utils/axios';

const login = async (connectData: string) => {
  const { data } = await axios.post('/auth/login', { connectData });
  return data;
};

const useLogin = () => useMutation(login);

export default useLogin;
