import { createContext } from 'react';
import { AuthData } from '~/hooks/api/useLogin';

export interface AuthContextInterface {
  saveAuthData: (authData: AuthData | undefined) => void;
  authData?: AuthData;
}

const AuthContext = createContext<AuthContextInterface>({
  saveAuthData: () => undefined,
});

export default AuthContext;
