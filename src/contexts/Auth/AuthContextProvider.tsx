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
      const token = localStorage.getItem('token');
      Object.assign(config.headers, { authorization: `Bearer ${token}` });
      return config;
    });

    axios.interceptors.response.use(
      (res) => res.data,
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
  }, [authData?.token, navigate, setAuthData]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
