import { Brightness4, Brightness7 } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { useContext } from 'react';
import { ThemeModeContext } from '../../../../contexts/themeModeContext';

export const ThemeToggler = () => {
  const colorMode = useContext(ThemeModeContext);
  return (
    <IconButton onClick={colorMode.toggleThemeMode} color='inherit'>
      {colorMode.themeMode === 'dark' ? <Brightness7 /> : <Brightness4 />}
    </IconButton>
  );
};
