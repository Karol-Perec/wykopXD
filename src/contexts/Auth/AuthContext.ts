import { createContext } from 'react';

export interface AuthContextInterface {
  token: string | null;
}

const AuthContext = createContext<AuthContextInterface>({
  token: null,
});

export default AuthContext;
