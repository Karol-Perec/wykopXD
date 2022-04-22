import { PaletteMode } from '@mui/material';
import { createContext } from 'react';

export interface ThemeModeContextInterface {
  toggleThemeMode: () => void;
  themeMode: PaletteMode;
}

const ThemeModeContext = createContext<ThemeModeContextInterface>({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggleThemeMode: () => {},
  themeMode: 'dark',
});

export default ThemeModeContext;
