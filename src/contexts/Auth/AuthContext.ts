import { createContext } from 'react';
import { UserFull } from 'types';

export interface AuthContextInterface {
  saveAuthData: (authData: any) => void;
  authData: {
    userKey?: string;
    accountKey?: string;
    profile?: UserFull;
  };
}

const AuthContext = createContext<AuthContextInterface>({
  saveAuthData: () => {}, // eslint-disable-line
  authData: {},
});

export default AuthContext;
