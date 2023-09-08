import { useMutation } from '@tanstack/react-query';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '~/contexts/Auth/AuthContext';
import { Route } from '~/routes';
import { WykopBody, WykopResponse } from '~/types';
import axios from '~/utils/axios';

type RefreshTokenBody = WykopBody<{
  refresh_token: string;
}>;

type RefreshTokenResponse = WykopResponse<{
  refresh_token: string;
  token: string;
}>;

const useRefreshToken = () => {
  const { setToken } = useContext(AuthContext);
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (refreshToken: string) =>
      axios.post<RefreshTokenResponse, RefreshTokenBody>('/refresh_token', { data: { refresh_token: refreshToken } }),
    onSuccess: ({ data }) => {
      setToken(data.token);
      navigate(Route.HOME);
    },
  });
};

export default useRefreshToken;
