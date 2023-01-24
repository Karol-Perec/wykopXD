import { Menu as MenuIcon } from '@mui/icons-material';
import { IconButton, Toolbar, useMediaQuery, useTheme } from '@mui/material';
import { MouseEventHandler, useContext } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Avatar from '~/components/UI/Avatar';
import AuthContext from '~/contexts/Auth/AuthContext';
import { ROUTE } from '~/routes';
import { NavLinks } from '../NavLinks/NavLinks';
import * as S from './TopBar.styles';

interface TopBarProps {
  onLeftDrawerToggleClick: MouseEventHandler<HTMLElement>;
  onRightDrawerToggleClick: MouseEventHandler<HTMLElement>;
}

const TopBar = ({ onLeftDrawerToggleClick, onRightDrawerToggleClick }: TopBarProps) => {
  const { authData } = useContext(AuthContext);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <S.AppBar>
      <Toolbar disableGutters variant='dense' component={S.ToolbarContainer}>
        <S.MainNavigation>
          {isMobile ? (
            <IconButton onClick={onLeftDrawerToggleClick} color='inherit'>
              <MenuIcon />
            </IconButton>
          ) : (
            <>
              <IconButton component={RouterLink} to={ROUTE.HOME} disableRipple>
                <S.Logo />
              </IconButton>
              <NavLinks />
            </>
          )}
        </S.MainNavigation>

        <div id='sort-select-wrapper' />
        <Avatar onClick={onRightDrawerToggleClick} size={32} src={authData?.user?.avatarUrl} />
      </Toolbar>
    </S.AppBar>
  );
};

export default TopBar;
