import { PropsWithChildren, useMemo } from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';
import AuthContext from './AuthContext';

const AuthContextProvider = ({ children }: PropsWithChildren<unknown>) => {
  const [token, setToken] = useLocalStorage<string>('token', '');

  const value = useMemo(() => ({ token }), [token]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
