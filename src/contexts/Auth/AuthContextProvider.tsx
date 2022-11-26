import { PropsWithChildren, useLayoutEffect, useMemo } from 'react';
import { AuthData } from '~/hooks/api/useLogin';
import useLocalStorage from '~/hooks/useLocalStorage';
import axios from '~/utils/axios';
import AuthContext, { AuthContextInterface } from './AuthContext';

const AuthContextProvider = ({ children }: PropsWithChildren) => {
  const [authData, setAuthData] = useLocalStorage<AuthData | undefined>('auth', undefined);

  const value = useMemo<AuthContextInterface>(
    () => ({
      saveAuthData: (data) => setAuthData(data),
      authData,
    }),
    [authData, setAuthData]
  );

  useLayoutEffect(() => {
    // const errInterceptor = (error) => {
    //   if (error.response.status === 401) {
    //     navigate('/login');
    //   }

    //   return Promise.reject(error);
    // };

    axios.interceptors.request.use((config) => {
      config.headers = { ...config.headers, Authorization: authData?.userkey };
      return config;
    });

    return () => axios.interceptors.request.clear();
  }, [authData?.userkey]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
