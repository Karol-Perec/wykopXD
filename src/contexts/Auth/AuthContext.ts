import { createContext } from 'react';
import { UserFull } from 'types';

export interface AuthContextInterface {
  token?: string;
  accountKey?: string;
  profile?: UserFull;
}

const AuthContext = createContext<AuthContextInterface>({});

export default AuthContext;
