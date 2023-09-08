import { useMutation } from '@tanstack/react-query';
import { useContext } from 'react';
import AuthContext from '~/contexts/Auth/AuthContext';
import { WykopBody, WykopResponse } from '~/types';
import axios from '~/utils/axios';

type AuthBody = WykopBody<{
  key: string;
  secret: string;
}>;

type AuthResponse = WykopResponse<{
  token: string;
}>;

const body: AuthBody = {
  data: {
    key: 'w53947240748',
    secret: 'd537d9e0a7adc1510842059ae5316419',
  },
};

const useAuth = () => {
  const { setToken } = useContext(AuthContext);
  return useMutation({
    mutationFn: () => axios.post<AuthResponse, AuthBody>('/auth', body),
    onSuccess: ({ data }) => setToken(data.token),
  });
};

export default useAuth;
