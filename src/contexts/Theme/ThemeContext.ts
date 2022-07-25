import { PaletteMode } from '@mui/material';
import { createContext } from 'react';
import { PrimaryColor } from '../../theme';

export interface ThemeContextInterface {
  handleToggleThemeMode: () => void;
  handleSetPrimaryColor: React.Dispatch<React.SetStateAction<PrimaryColor>>;
  themeMode: PaletteMode;
  primaryColor: PrimaryColor;
}

const ThemeContext = createContext<ThemeContextInterface>({
  handleToggleThemeMode: () => {}, // eslint-disable-line
  handleSetPrimaryColor: () => {}, // eslint-disable-line
  themeMode: 'dark',
  primaryColor: PrimaryColor.Blue,
});

export default ThemeContext;
