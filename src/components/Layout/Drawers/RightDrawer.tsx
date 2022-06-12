import { MouseEventHandler, useContext } from 'react';
import { Divider, List, Typography } from '@mui/material';
import {
  Login as LoginIcon,
  Logout as LogoutIcon,
  Settings as SettingsIcon,
  Info as AppInfoIcon,
} from '@mui/icons-material';
import AuthContext from 'contexts/Auth/AuthContext';
import Avatar from '../../UI/Avatar';
import { MobileNavLink } from '../NavItems/NavLink/NavLink';
import * as S from './Drawers.styles';
import Drawer from '../../UI/Drawer';

interface RightDrawerProps {
  open: boolean;
  onUserAction: MouseEventHandler;
}

const RightDrawer = ({ open, onUserAction }: RightDrawerProps) => {
  const { authData, saveAuthData } = useContext(AuthContext);

  const handleLogout: MouseEventHandler = (e) => {
    saveAuthData(undefined);
    onUserAction(e);
  };

  return (
    <Drawer anchor='right' onUserAction={onUserAction} open={open}>
      <S.RightDrawerHeader>
        <Avatar src={authData?.profile.avatarUrl} size={60} />
        <Typography variant='h6'>{authData?.profile.login}</Typography>
      </S.RightDrawerHeader>
      <Divider variant='middle' />
      <List>
        {!authData?.userkey && (
          <MobileNavLink to='/zaloguj' onClick={onUserAction} icon={<LoginIcon />}>
            Zaloguj się
          </MobileNavLink>
        )}
        {authData?.userkey && (
          <MobileNavLink to='/x' onClick={handleLogout} icon={<LogoutIcon />}>
            Wyloguj się
          </MobileNavLink>
        )}
        <MobileNavLink to='/ustawienia' onClick={onUserAction} icon={<SettingsIcon />}>
          Ustawienia
        </MobileNavLink>
        <MobileNavLink to='/o-aplikacji' onClick={onUserAction} icon={<AppInfoIcon />}>
          O aplikacji
        </MobileNavLink>
      </List>
      <Divider variant='middle' />
    </Drawer>
  );
};

export default RightDrawer;
