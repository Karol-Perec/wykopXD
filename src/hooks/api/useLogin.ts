import { useMutation } from '@tanstack/react-query';
import { UserFull } from 'types';
import axios from 'utils/axios';

export interface AuthData {
  profile: UserFull;
  userkey: string;
  accountkey: string;
}

const login = async (connectData: string) => {
  const { data } = await axios.post<AuthData>('/auth/login', { connectData });
  return data;
};

const useLogin = (onSuccess: (data: AuthData) => void) =>
  useMutation(login, { onSuccess, useErrorBoundary: false });

export default useLogin;
