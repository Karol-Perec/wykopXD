import { PropsWithChildren, useMemo } from 'react';
import useLocalStorage from '~/hooks/useLocalStorage';
import SettingsContext, { SettingsContextInterface } from './SettingsContext';

const SettingsContextProvider = ({ children }: PropsWithChildren) => {
  const [doShowAdultContent, setDoShowAdultContent] = useLocalStorage<boolean>('doShowAdultContent', false);

  const value = useMemo<SettingsContextInterface>(
    () => ({
      doShowAdultContent,
      setDoShowAdultContent,
    }),
    [doShowAdultContent, setDoShowAdultContent]
  );

  return <SettingsContext.Provider value={value}>{children}</SettingsContext.Provider>;
};

export default SettingsContextProvider;
