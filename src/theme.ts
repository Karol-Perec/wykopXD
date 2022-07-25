import { PaletteMode, PaletteOptions, ThemeOptions } from '@mui/material';

const darkModePalette: PaletteOptions = {};

const lightModePalette: PaletteOptions = {
  background: { default: '#f9fbfa' },
};

export enum PrimaryColor {
  Blue = '#1d9bf0',
  Yellow = '#ffd400',
  Pink = '#f91880',
  Purple = '#7856ff',
  Orange = '#ff7a00',
  Green = '#00ba7c',
}

export enum ThemeMode {
  Light = 'light',
  Dim = 'dim',
  Dark = 'dark',
  Black = 'black',
}

export const getTheme = (mode: PaletteMode, primaryColor: PrimaryColor): ThemeOptions => ({
  palette: {
    mode,
    ...(mode === 'dark' ? darkModePalette : lightModePalette),
    primary: { main: primaryColor },
    text: { secondary: '#bbb' },
    action: { active: mode === 'dark' ? '#fff' : 'rgb(15, 20, 25)' },
  },
  typography: {
    h2: {
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    h5: {
      fontSize: 16,
      fontWeight: 'bolder',
      textAlign: 'center',
    },
    h6: {
      fontSize: 14,
      fontWeight: 'bold',
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
