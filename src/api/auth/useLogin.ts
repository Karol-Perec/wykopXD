import { useMutation } from '@tanstack/react-query';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext, { AuthData } from '~/contexts/Auth/AuthContext';
import axios from '~/utils/axios';

const useLogin = () => {
  const { setAuthData } = useContext(AuthContext);
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (connectData: string) => axios.post<AuthData>('/auth/login', { connectData }),
    onSuccess: (data) => {
      setAuthData(data);
      navigate('/');
    },
    useErrorBoundary: false,
  });
};

export default useLogin;
