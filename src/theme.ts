import { PaletteMode, PaletteOptions, ThemeOptions } from '@mui/material';

const darkModePalette: PaletteOptions = {};

const lightModePalette: PaletteOptions = {};

export const getTheme = (mode: PaletteMode): ThemeOptions => ({
  palette: {
    mode,
    ...(mode === 'dark' ? darkModePalette : lightModePalette),
    primary: { main: '#328efe' },
    text: { secondary: '#bbb' },
  },
  typography: {
    h2: {
      fontSize: 18,
      fontWeight: 500,
      textAlign: 'center',
    },
    body1: {
      fontSize: 14,
    },
  },
});
