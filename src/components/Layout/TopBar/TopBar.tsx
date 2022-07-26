import { Menu as MenuIcon } from '@mui/icons-material';
import { Container, IconButton, Toolbar, useMediaQuery, useTheme } from '@mui/material';
import { MouseEventHandler, useContext } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import AuthContext from 'contexts/Auth/AuthContext';
import { ROUTE } from 'routes';
import { NavLinks } from '../NavLinks/NavLinks';
import Avatar from '../../UI/Avatar';
import * as S from './TopBar.styles';

interface TopBarProps {
  onLeftDrawerToggleClick: MouseEventHandler<HTMLElement>;
  onRightDrawerToggleClick: MouseEventHandler<HTMLElement>;
}

const TopBar = ({ onLeftDrawerToggleClick, onRightDrawerToggleClick }: TopBarProps) => {
  const { authData } = useContext(AuthContext);
  const theme = useTheme();
  const isDekstop = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <S.TopBar>
      <Toolbar disableGutters variant='dense' component={Container}>
        <S.MainNavigation>
          {isDekstop ? (
            <>
              <IconButton component={RouterLink} to={ROUTE.HOME} disableRipple>
                <S.Logo />
              </IconButton>
              <NavLinks />
            </>
          ) : (
            <IconButton onClick={onLeftDrawerToggleClick} color='inherit'>
              <MenuIcon />
            </IconButton>
          )}
        </S.MainNavigation>

        <div id='category-button-wrapper' />
        <Avatar onClick={onRightDrawerToggleClick} size={32} src={authData?.profile?.avatarUrl} />
      </Toolbar>
    </S.TopBar>
  );
};

export default TopBar;
