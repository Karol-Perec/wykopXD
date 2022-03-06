import { PaletteMode, PaletteOptions, ThemeOptions } from '@mui/material';

const darkModePalette: PaletteOptions = {};

const lightModePalette: PaletteOptions = {
  background: { default: '#f9fbfa' },
};

export const getTheme = (mode: PaletteMode): ThemeOptions => ({
  palette: {
    mode,
    ...(mode === 'dark' ? darkModePalette : lightModePalette),
    primary: { main: '#1d9bf0' }, // #328efe #4283af
    secondary: { main: '#fea232' }, // #fea232 #42afa4
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
      textDecoration: 'none',
    },
    fontFamily: [
      'Roboto',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});
