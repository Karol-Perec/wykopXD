import { PaletteMode, ThemeOptions } from "@mui/material";

export const getTheme = (mode: PaletteMode): ThemeOptions => ({
  palette: {
    mode,
    primary: { main: mode === "dark" ? "#328efe" : "#aaaaaa" },
    text: { secondary: "#bbb" },
  },
  typography: {
    h2: {
      fontSize: 18,
      fontWeight: 500,
      textAlign: "center",
    },
    body1: {
      fontSize: 14,
    },
  },
});
