import { PropsWithChildren, useLayoutEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthData } from '~/hooks/api/useLogin';
import useLocalStorage from '~/hooks/useLocalStorage';
import axios from '~/utils/axios';
import AuthContext, { AuthContextInterface } from './AuthContext';

const AuthContextProvider = ({ children }: PropsWithChildren) => {
  const [authData, setAuthData] = useLocalStorage<AuthData | undefined>('auth', undefined);
  const navigate = useNavigate();

  const value = useMemo<AuthContextInterface>(
    () => ({
      saveAuthData: (data) => setAuthData(data),
      authData,
    }),
    [authData, setAuthData]
  );

  useLayoutEffect(() => {
    axios.interceptors.request.use((config) => {
      config.headers = { ...config.headers, Authorization: authData?.userkey };
      return config;
    });

    axios.interceptors.response.use(
      (res) => res,
      (err) => {
        if (err.response.status === 401) {
          setAuthData(undefined);
          navigate('/zaloguj');
        } else {
          return Promise.reject(err);
        }
      }
    );

    return () => {
      axios.interceptors.request.clear();
      axios.interceptors.response.clear();
    };
  }, [authData?.userkey, navigate, setAuthData]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
