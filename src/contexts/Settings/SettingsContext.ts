import { createContext } from 'react';

export interface Settings {
  theme: string;
}

export interface SettingsContextInterface {
  saveSettings: (authData: Settings) => void;
  settings?: Settings;
}

const SettingsContext = createContext<SettingsContextInterface>({
  saveSettings: () => {}, // eslint-disable-line
});

export default SettingsContext;
