import { PropsWithChildren, useMemo } from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';
import AuthContext, { AuthContextInterface } from './AuthContext';

const AuthContextProvider = ({ children }: PropsWithChildren<unknown>) => {
  const [authData, setAuthData] = useLocalStorage<AuthContextInterface['authData']>('auth', {});

  const value = useMemo<AuthContextInterface>(
    () => ({
      saveAuthData: (data: any) => setAuthData(data),
      authData,
    }),
    [authData, setAuthData]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
