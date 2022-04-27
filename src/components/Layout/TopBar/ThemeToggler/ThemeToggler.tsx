import { Brightness4 as DarkModeIcon, Brightness7 as LightModeIcon } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import ThemeModeContext from 'contexts/Theme/ThemeModeContext';
import { useContext } from 'react';

const ThemeToggler = () => {
  const themeContext = useContext(ThemeModeContext);

  return (
    <IconButton onClick={themeContext.toggleThemeMode} color='inherit'>
      {themeContext.themeMode === 'dark' ? <DarkModeIcon /> : <LightModeIcon />}
    </IconButton>
  );
};

export default ThemeToggler;
