import { Menu as MenuIcon } from '@mui/icons-material';
import { Box, Button, Container, IconButton, Toolbar } from '@mui/material';
import { MouseEventHandler } from 'react';
import { matchRoutes, useLocation } from 'react-router-dom';
import { UnstyledRouterLink } from 'components/UI/CustomLinks';
import ThemeToggler from './ThemeToggler/ThemeToggler';
import * as S from './TopBar.styles';
import { navItems } from '../SideDrawer/NavItems/NavItems';

interface TopBarProps {
  onDrawerToggleClick: MouseEventHandler<HTMLButtonElement>;
}

const TopBar = ({ onDrawerToggleClick }: TopBarProps) => {
  const location = useLocation();
  const routeMatch = matchRoutes(
    [{ path: '/' }, { path: '/hity' }, { path: '/mikroblog' }],
    location
  );

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
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, color: 'white' }}>
            {navItems.map((nav) => (
              <Button component={UnstyledRouterLink} to={nav.path} color='inherit' key={nav.path}>
                {nav.label}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <ThemeToggler />
          </Box>
        </Toolbar>
      </Container>
    </S.TopBar>
  );
};

export default TopBar;
