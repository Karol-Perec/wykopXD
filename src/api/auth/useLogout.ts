import { useMutation } from '@tanstack/react-query';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '~/contexts/Auth/AuthContext';
import { Route } from '~/routes';
import axios from '~/utils/axios';

const useLogout = () => {
  const { setAuthData } = useContext(AuthContext);
  const navigate = useNavigate();

  return useMutation({
    mutationFn: () => axios.get('/logout'),
    onSuccess: () => {
      setAuthData(undefined);
      navigate(Route.HOME);
    },
  });
};

export default useLogout;
