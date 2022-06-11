import { PropsWithChildren } from 'react';
import AuthContextProvider from './Auth/AuthContextProvider';
import SortContextProvider from './Sort/SortContextProvider';
import ThemeContextProvider from './Theme/ThemeContextProvider';

const ContextProvider = ({ children }: PropsWithChildren) => (
  <ThemeContextProvider>
    <AuthContextProvider>
      <SortContextProvider>{children}</SortContextProvider>
    </AuthContextProvider>
  </ThemeContextProvider>
);

export default ContextProvider;
