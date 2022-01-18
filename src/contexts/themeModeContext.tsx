import { PaletteMode } from "@mui/material";
import { createContext } from "react";

export interface ThemeModeContextInterface {
  toggleThemeMode: () => void;
  themeMode: PaletteMode;
}

export const ThemeModeContext = createContext<ThemeModeContextInterface>({
  toggleThemeMode: () => {},
  themeMode: "dark",
});
