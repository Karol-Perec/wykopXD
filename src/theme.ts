import { PaletteOptions, ThemeOptions } from '@mui/material';

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

export const themeModeTitles = {
  [ThemeMode.Light]: 'Jasny',
  [ThemeMode.Dim]: 'Zmierzch',
  [ThemeMode.Dark]: 'Ciemny',
  [ThemeMode.Black]: 'Noc',
};

const themePalettes: Record<ThemeMode, PaletteOptions> = {
  [ThemeMode.Light]: {
    action: { active: '#0f1419' },
    background: { default: '#f9fbfa' },
  },
  [ThemeMode.Dim]: {
    action: { active: '#fff' },
    background: { default: '#15202b', paper: '#15202b' },
  },
  [ThemeMode.Dark]: {
    action: { active: '#fff' },
  },
  [ThemeMode.Black]: {
    action: { active: '#fff' },
    background: { default: '#000', paper: '#000' },
  },
};

export const getTheme = (mode: ThemeMode, primaryColor: PrimaryColor): ThemeOptions => ({
  palette: {
    mode: mode === ThemeMode.Light ? 'light' : 'dark',
    ...themePalettes[mode],
    primary: { main: primaryColor },
    text: { secondary: '#bbb' },
  },
  typography: {
    caption: {
      color: '#aaa',
    },
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
      // 'Inter',
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
  components: {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backdropFilter: 'blur(8px)',
        },
        invisible: {
          backdropFilter: 'none',
        },
      },
    },
  },
});
