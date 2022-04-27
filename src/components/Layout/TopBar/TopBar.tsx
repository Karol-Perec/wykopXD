import { Menu as MenuIcon } from '@mui/icons-material';
import { Box, Container, IconButton, Toolbar } from '@mui/material';
import { MouseEventHandler } from 'react';
import ThemeToggler from './ThemeToggler/ThemeToggler';
import * as S from './TopBar.styles';
import { NavItems } from '../NavItems/NavItems';
import SortButton from './SortButton/SortButton';

interface TopBarProps {
  onDrawerToggleClick: MouseEventHandler<HTMLButtonElement>;
}

const TopBar = ({ onDrawerToggleClick }: TopBarProps) => {
  const xd = 'xd';

  return (
    <S.TopBar>
      <Container>
        <Toolbar disableGutters>
          <S.Logo />

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton size='large' onClick={onDrawerToggleClick} color='inherit'>
              <MenuIcon />
            </IconButton>
          </Box>

          <NavItems />

          <SortButton />
          <ThemeToggler />
        </Toolbar>
      </Container>
    </S.TopBar>
  );
};

export default TopBar;
