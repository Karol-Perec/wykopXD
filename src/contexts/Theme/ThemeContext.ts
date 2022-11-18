import { MouseEvent, createContext } from 'react';
import { PrimaryColor, ThemeMode } from '~/theme';

export interface ThemeContextInterface {
  handleChangeThemeMode: (event: MouseEvent<HTMLElement>, mode: ThemeMode) => void;
  handleSetPrimaryColor: React.Dispatch<React.SetStateAction<PrimaryColor>>;
  themeMode: ThemeMode;
  primaryColor: PrimaryColor;
}

const ThemeContext = createContext<ThemeContextInterface>({
  handleChangeThemeMode: () => undefined,
  handleSetPrimaryColor: () => undefined,
  themeMode: ThemeMode.Dark,
  primaryColor: PrimaryColor.Blue,
});

export default ThemeContext;
