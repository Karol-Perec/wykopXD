import { useMutation } from '@tanstack/react-query';
import { useContext } from 'react';
import AuthContext from '~/contexts/Auth/AuthContext';
import axios from '~/utils/axios';

interface AuthBody {
  data: {
    key: string;
    secret: string;
  };
}

interface AuthResponse {
  data: {
    token: string;
  };
}

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
    onSuccess: (res) => setToken(res.data.token),
  });
};

export default useAuth;