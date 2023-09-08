import { PropsWithChildren, useLayoutEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import useLocalStorage from '~/hooks/useLocalStorage';
import { Route } from '~/routes';
import axios from '~/utils/axios';
import AuthContext, { AuthContextInterface, AuthData } from './AuthContext';

const AuthContextProvider = ({ children }: PropsWithChildren) => {
  const [authData, setAuthData] = useLocalStorage<AuthData | undefined>('auth');
  const [token, setToken] = useLocalStorage<string | undefined>('token');
  const navigate = useNavigate();

  const value = useMemo<AuthContextInterface>(
    () => ({ setToken, authData, token, setAuthData }),
    [authData, setAuthData, setToken, token]
  );

  useLayoutEffect(() => {
    axios.interceptors.request.use((config) => {
      if (token) Object.assign(config.headers, { authorization: `Bearer ${token}` });
      return config;
    });

    axios.interceptors.response.use(
      (res) => res.data,
      (err) => {
        if (err.response.data.code === 403 && err.response.data.error.key === 2) {
          setToken(undefined);
          navigate(Route.LOGIN);
        } else {
          return Promise.reject(err);
        }
      }
    );

    return () => {
      axios.interceptors.request.clear();
      axios.interceptors.response.clear();
    };
  }, [navigate, setToken, token]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
