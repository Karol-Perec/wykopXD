import { MouseEventHandler, useContext } from 'react';
import { alpha, Divider, Drawer, List, Typography, useTheme } from '@mui/material';
import {
  Login as LoginIcon,
  Logout as LogoutIcon,
  Settings as SettingsIcon,
  Info as AppInfoIcon,
} from '@mui/icons-material';
import AuthContext from 'contexts/Auth/AuthContext';
import Avatar from '../../UI/Avatar';
import { MobileNavLink } from '../NavItems/NavLink/NavLink';
import * as S from './RightDrawer.styles';

interface LeftDrawerProps {
  open: boolean;
  onUserAction: MouseEventHandler;
}

const LeftDrawer = ({ open, onUserAction }: LeftDrawerProps) => {
  const theme = useTheme();
  const { authData, saveAuthData } = useContext(AuthContext);

  const handleLogout: MouseEventHandler = (e) => {
    saveAuthData({});
    onUserAction(e);
  };

  return (
    <Drawer
      open={open}
      onClose={onUserAction}
      PaperProps={{
        style: {
          backdropFilter: 'blur(10px)',
          backgroundColor: alpha(
            theme.palette.background.default,
            theme.palette.mode === 'dark' ? 0.6 : 0.8
          ),
          width: 200,
        },
      }}
      anchor='right'
    >
      <S.DrawerHeader>
        <Avatar src={authData.profile?.avatarUrl} size={60} />
        <Typography variant='h6'>{authData.profile?.login}</Typography>
      </S.DrawerHeader>
      <Divider variant='middle' />
      <List>
        {!authData.userKey && (
          <MobileNavLink to='/zaloguj' onClick={onUserAction} icon={<LoginIcon />}>
            Zaloguj się
          </MobileNavLink>
        )}
        <MobileNavLink to='/x' onClick={handleLogout} icon={<LogoutIcon />}>
          Wyloguj się
        </MobileNavLink>
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

export default LeftDrawer;
