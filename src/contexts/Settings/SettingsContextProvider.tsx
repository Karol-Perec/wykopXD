import { PropsWithChildren, useMemo } from 'react';
import useLocalStorage from 'hooks/useLocalStorage';
import SettingsContext, { Settings, SettingsContextInterface } from './SettingsContext';

const SettingsContextProvider = ({ children }: PropsWithChildren) => {
  const [settings, setSettings] = useLocalStorage<Settings>('settings', { theme: 'theme' });

  const value = useMemo<SettingsContextInterface>(
    () => ({
      saveSettings: (data: Partial<Settings>) => setSettings((prev) => ({ ...prev, data })),
      settings,
    }),
    [settings, setSettings]
  );

  return <SettingsContext.Provider value={value}>{children}</SettingsContext.Provider>;
};

export default SettingsContextProvider;
