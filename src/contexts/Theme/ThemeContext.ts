import { MouseEvent, createContext } from 'react';
import { PrimaryColor, ThemeMode } from '~/theme';

export interface ThemeContextInterface {
  changeThemeMode: (event: MouseEvent<HTMLElement>, mode: ThemeMode) => void;
  setPrimaryColor: React.Dispatch<React.SetStateAction<PrimaryColor>>;
  themeMode: ThemeMode;
  primaryColor: PrimaryColor;
}

const ThemeContext = createContext<ThemeContextInterface>({
  changeThemeMode: () => undefined,
  setPrimaryColor: () => undefined,
  themeMode: ThemeMode.Dark,
  primaryColor: PrimaryColor.Blue,
});

export default ThemeContext;
