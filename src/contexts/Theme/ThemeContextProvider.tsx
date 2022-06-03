import { createTheme, ThemeProvider, PaletteMode } from '@mui/material';
import { PropsWithChildren, useMemo } from 'react';
import useLocalStorage from 'hooks/useLocalStorage';
import { getTheme } from 'theme';
import ThemeModeContext, { ThemeModeContextInterface } from './ThemeModeContext';

const ThemeContextProvider = ({ children }: PropsWithChildren<unknown>) => {
  const [themeMode, setThemeMode] = useLocalStorage<PaletteMode>('themeMode', 'dark');

  const toggleThemeMode = useMemo<ThemeModeContextInterface>(
    () => ({
      handleToggleThemeMode: () =>
        setThemeMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light')),
      themeMode,
    }),
    [themeMode, setThemeMode]
  );

  const theme = useMemo(() => createTheme(getTheme(themeMode)), [themeMode]);

  return (
    <ThemeModeContext.Provider value={toggleThemeMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeModeContext.Provider>
  );
};

export default ThemeContextProvider;
