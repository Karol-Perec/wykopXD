import { Menu as MenuIcon } from '@mui/icons-material';
import { Box, Container, IconButton, Toolbar } from '@mui/material';
import { MouseEventHandler, useContext } from 'react';
import ThemeToggler from './ThemeToggler/ThemeToggler';
import * as S from './TopBar.styles';
import { NavLinks } from '../NavItems/NavLinks';
import SortButton from './SortButton/SortButton';
import Avatar from '../../UI/Avatar';
import AuthContext from '../../../contexts/Auth/AuthContext';

interface TopBarProps {
  onLeftDrawerToggleClick: MouseEventHandler<HTMLElement>;
  onRightDrawerToggleClick: MouseEventHandler<HTMLElement>;
}

const TopBar = ({ onLeftDrawerToggleClick, onRightDrawerToggleClick }: TopBarProps) => {
  const { authData } = useContext(AuthContext);

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
          <Avatar onClick={onRightDrawerToggleClick} size={40} src={authData.profile?.avatarUrl} />
        </Toolbar>
      </Container>
    </S.TopBar>
  );
};

export default TopBar;
