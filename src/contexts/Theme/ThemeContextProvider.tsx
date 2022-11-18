import { createTheme, ThemeProvider } from '@mui/material';
import { PropsWithChildren, useMemo, MouseEvent } from 'react';
import useLocalStorage from '~/hooks/useLocalStorage';
import { getTheme, PrimaryColor, ThemeMode } from '~/theme';
import ThemeModeContext, { ThemeContextInterface } from './ThemeContext';

const ThemeContextProvider = ({ children }: PropsWithChildren) => {
  const [themeMode, setThemeMode] = useLocalStorage<ThemeMode>('themeMode', ThemeMode.Dark);
  const [primaryColor, setPrimaryColor] = useLocalStorage<PrimaryColor>('color', PrimaryColor.Blue);

  const toggleThemeMode = useMemo<ThemeContextInterface>(
    () => ({
      handleChangeThemeMode: (_: MouseEvent<HTMLElement>, mode: ThemeMode) => setThemeMode(mode),
      themeMode,
      handleSetPrimaryColor: setPrimaryColor,
      primaryColor,
    }),
    [themeMode, setPrimaryColor, primaryColor, setThemeMode]
  );

  const theme = useMemo(
    () => createTheme(getTheme(themeMode, primaryColor)),
    [themeMode, primaryColor]
  );

  return (
    <ThemeModeContext.Provider value={toggleThemeMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeModeContext.Provider>
  );
};

export default ThemeContextProvider;
