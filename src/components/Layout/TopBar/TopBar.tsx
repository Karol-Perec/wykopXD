import { Menu as MenuIcon } from '@mui/icons-material';
import { Box, Container, IconButton, Toolbar } from '@mui/material';
import { MouseEventHandler } from 'react';
import { useTheme } from '@emotion/react';
import ThemeToggler from './ThemeToggler/ThemeToggler';
import * as S from './TopBar.styles';
import { NavLinks } from '../NavItems/NavLinks';
import SortButton from './SortButton/SortButton';
import Avatar from '../../UI/Avatar';

interface TopBarProps {
  onLeftDrawerToggleClick: MouseEventHandler<HTMLElement>;
  onRightDrawerToggleClick: MouseEventHandler<HTMLElement>;
}

const TopBar = ({ onLeftDrawerToggleClick, onRightDrawerToggleClick }: TopBarProps) => {
  const theme = useTheme();

  return (
    <S.TopBar>
      <Container>
        <Toolbar disableGutters>
          <S.Logo />

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton size='large' onClick={onLeftDrawerToggleClick} color='inherit'>
              <MenuIcon />
            </IconButton>
          </Box>

          <NavLinks />

          <SortButton />
          <ThemeToggler />
          <Avatar onClick={onRightDrawerToggleClick} size={40} />
        </Toolbar>
      </Container>
    </S.TopBar>
  );
};

export default TopBar;
