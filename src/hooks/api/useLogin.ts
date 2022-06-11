import { useMutation } from 'react-query';
import axios from 'utils/axios';
import { UserFull } from 'types';

export interface AuthData {
  profile: UserFull;
  userkey: string;
  accountkey: string;
}

const login = async (connectData: string) => {
  const { data } = await axios.post<AuthData>('/auth/login', { connectData });
  return data;
};

const useLogin = (onSuccess: (data: AuthData) => void) => useMutation(login, { onSuccess });

export default useLogin;
