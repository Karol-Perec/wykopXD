import { createContext } from 'react';
import { User } from '~/types';

export interface AuthData {
  user: User;
}

export interface AuthContextInterface {
  setAuthData: (authData: AuthData | undefined) => void;
  setToken: (token: string | undefined) => void;
  token?: string;
  authData?: AuthData;
}

const AuthContext = createContext<AuthContextInterface>({
  setAuthData: () => undefined,
  setToken: () => undefined,
});

export default AuthContext;
