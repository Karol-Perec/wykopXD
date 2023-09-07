import { createContext, Dispatch, SetStateAction } from 'react';

export interface SettingsContextInterface {
  setDoShowAdultContent: Dispatch<SetStateAction<boolean>>;
  doShowAdultContent: boolean;
}

const SettingsContext = createContext<SettingsContextInterface>({
  setDoShowAdultContent: () => undefined,
  doShowAdultContent: false,
});

export default SettingsContext;
