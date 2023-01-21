import { useMutation } from '@tanstack/react-query';
import { User } from '~/types';
import axios from '~/utils/axios';

export interface AuthData {
  // user: User;
  // userkey: string;
  // accountkey: string;
  token: string;
}

const login = (connectData: string) => axios.post<AuthData>('/auth/login', { connectData });

const useLogin = (onSuccess: (data: AuthData) => void) =>
  useMutation({
    mutationFn: login,
    onSuccess,
    useErrorBoundary: false,
  });

export default useLogin;
