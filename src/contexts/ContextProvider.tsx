import { PropsWithChildren } from 'react';
import AuthContextProvider from './Auth/AuthContextProvider';
import ThemeContextProvider from './Theme/ThemeContextProvider';

const ContextProvider = ({ children }: PropsWithChildren) => (
  <ThemeContextProvider>
    <AuthContextProvider>{children}</AuthContextProvider>
  </ThemeContextProvider>
);

export default ContextProvider;
