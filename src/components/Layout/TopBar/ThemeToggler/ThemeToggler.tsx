import { Brightness4 as DarkModeIcon, Brightness7 as LightModeIcon } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import ThemeModeContext from 'contexts/ThemeModeContext';
import { useContext } from 'react';

const ThemeToggler = () => {
  const colorMode = useContext(ThemeModeContext);

  return (
    <IconButton onClick={colorMode.toggleThemeMode} color='inherit'>
      {colorMode.themeMode === 'dark' ? <DarkModeIcon /> : <LightModeIcon />}
    </IconButton>
  );
};

export default ThemeToggler;
