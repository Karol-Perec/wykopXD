import { createTheme, ThemeProvider, PaletteMode } from '@mui/material';
import { PropsWithChildren, useMemo } from 'react';
import useLocalStorage from '~/hooks/useLocalStorage';
import { getTheme, PrimaryColor } from '~/theme';
import ThemeModeContext, { ThemeContextInterface } from './ThemeContext';

const ThemeContextProvider = ({ children }: PropsWithChildren) => {
  const [themeMode, setThemeMode] = useLocalStorage<PaletteMode>('themeMode', 'dark');
  const [primaryColor, setPrimaryColor] = useLocalStorage<PrimaryColor>('color', PrimaryColor.Blue);

  const toggleThemeMode = useMemo<ThemeContextInterface>(
    () => ({
      handleToggleThemeMode: () =>
        setThemeMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light')),
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
