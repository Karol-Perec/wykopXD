import { MouseEventHandler, useContext } from 'react';
import { Divider, List, Typography } from '@mui/material';
import {
  Login as LoginIcon,
  Logout as LogoutIcon,
  Settings as SettingsIcon,
  Info as AppInfoIcon,
} from '@mui/icons-material';
import AuthContext from 'contexts/Auth/AuthContext';
import { DrawerNavLink } from '../NavLinks/NavLink/NavLink';
import Avatar from '../../UI/Avatar';
import Drawer from '../../UI/Drawer';
import * as S from './SideDrawers.styles';

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
        <Avatar src={authData?.profile?.avatarUrl} size={60} />
        <Typography variant='h6'>{authData?.profile?.login}</Typography>
      </S.RightDrawerHeader>
      <Divider variant='middle' />
      <List>
        {!authData?.userkey && (
          <DrawerNavLink
            to='/zaloguj'
            label='Zaloguj się'
            onClick={onUserAction}
            icon={<LoginIcon />}
          />
        )}
        {authData?.userkey && (
          <DrawerNavLink to='/x' label='Wyloguj się' onClick={handleLogout} icon={<LogoutIcon />} />
        )}
        <DrawerNavLink
          to='/ustawienia'
          label='Ustawienia'
          onClick={onUserAction}
          icon={<SettingsIcon />}
        />
        <DrawerNavLink
          to='/o-aplikacji'
          label='O aplikacji'
          onClick={onUserAction}
          icon={<AppInfoIcon />}
        />
      </List>
      <Divider variant='middle' />
    </Drawer>
  );
};

export default RightDrawer;
