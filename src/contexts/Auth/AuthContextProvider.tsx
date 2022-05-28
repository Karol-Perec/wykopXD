import { PropsWithChildren, useMemo } from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';
import AuthContext, { AuthContextInterface } from './AuthContext';

const AuthContextProvider = ({ children }: PropsWithChildren<unknown>) => {
  const [authData, setToken] = useLocalStorage<AuthContextInterface>('auth', {});

  const value = useMemo(() => authData, [authData]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
