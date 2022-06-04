import { Menu as MenuIcon } from '@mui/icons-material';
import { Container, IconButton, Toolbar } from '@mui/material';
import { MouseEventHandler, useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from 'contexts/Auth/AuthContext';
import { ROUTE } from 'routes';
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
  const { authData } = useContext(AuthContext);

  return (
    <S.TopBar>
      <Container>
        <Toolbar disableGutters>
          <Link to={ROUTE.HOME}>
            <S.Logo />
          </Link>

          <S.MenuTogglerContainer>
            <IconButton size='large' onClick={onLeftDrawerToggleClick} color='inherit'>
              <MenuIcon />
            </IconButton>
          </S.MenuTogglerContainer>

          <S.NavContainer>
            <NavLinks />
          </S.NavContainer>

          <SortButton />

          <ThemeToggler />

          <Avatar onClick={onRightDrawerToggleClick} size={40} src={authData.profile?.avatarUrl} />
        </Toolbar>
      </Container>
    </S.TopBar>
  );
};

export default TopBar;
