import { PropsWithChildren } from 'react';
import AuthContextProvider from './Auth/AuthContextProvider';
import SettingsContextProvider from './Settings/SettingsContextProvider';
import ThemeContextProvider from './Theme/ThemeContextProvider';

const ContextProvider = ({ children }: PropsWithChildren) => (
  <ThemeContextProvider>
    <SettingsContextProvider>
      <AuthContextProvider>{children}</AuthContextProvider>
    </SettingsContextProvider>
  </ThemeContextProvider>
);

export default ContextProvider;
