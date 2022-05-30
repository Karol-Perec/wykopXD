import { useMutation } from 'react-query';
import axios from 'utils/axios';
import { UserFull } from 'types';

interface LoginResponse {
  profile: UserFull;
  userkey: string;
  accountkey: string;
}

const login = async (connectData: string) => {
  const { data } = await axios.post<LoginResponse>('/auth/login', { connectData });
  return data;
};

const useLogin = (onSuccess: (data: any) => void) => useMutation(login, { onSuccess });

export default useLogin;
