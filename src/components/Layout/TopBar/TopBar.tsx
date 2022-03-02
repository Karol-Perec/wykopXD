import { Menu as MenuIcon } from '@mui/icons-material';
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import { MouseEventHandler } from 'react';
import { Link } from 'react-router-dom';
import { ROUTE } from '../../../Routes';
import ThemeToggler from './ThemeToggler/ThemeToggler';
import * as S from './TopBar.styles';

const pages = ['Główna', 'Wykopalisko', 'Hity', 'Mikroblog'];

interface TopBarProps {
  onDrawerToggleClick: MouseEventHandler<HTMLButtonElement>;
}

const TopBar = ({ onDrawerToggleClick }: TopBarProps) => {
  let xd;

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
          {/* sx={{ color: 'white', display: 'block' }} */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, color: 'white' }}>
            {pages.map((page) => (
              <Button key={page} component={Link} to={ROUTE.MIKROBLOG}>
                {page}
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
