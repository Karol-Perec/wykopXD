import { createTheme, ThemeProvider } from "@mui/material";
import { PaletteMode } from "@mui/material";
import { ReactNode, useMemo } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { getTheme } from "../theme";
import {
  ThemeModeContext,
  ThemeModeContextInterface,
} from "./themeModeContext";

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeContextProvider = ({ children }: ThemeProviderProps) => {
  const [themeMode, setThemeMode] = useLocalStorage<PaletteMode>(
    "themeMode",
    "dark"
  );

  const toggleThemeMode = useMemo<ThemeModeContextInterface>(
    () => ({
      toggleThemeMode: () => {
        setThemeMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
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
