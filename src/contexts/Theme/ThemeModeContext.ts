import { PaletteMode } from '@mui/material';
import { createContext } from 'react';

export interface ThemeModeContextInterface {
  handleToggleThemeMode: () => void;
  themeMode: PaletteMode;
}

const ThemeModeContext = createContext<ThemeModeContextInterface>({
  handleToggleThemeMode: () => {}, // eslint-disable-line
  themeMode: 'dark',
});

export default ThemeModeContext;
