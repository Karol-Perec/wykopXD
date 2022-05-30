import { MouseEventHandler, useContext } from 'react';
import { alpha, Divider, Drawer, List, Typography, useTheme } from '@mui/material';
import {
  Login as LoginIcon,
  Logout as LogoutIcon,
  Settings as SettingsIcon,
  Info as AppInfoIcon,
} from '@mui/icons-material';
import AuthContext from 'contexts/Auth/AuthContext';
import AppInfo from 'pages/AppInfo';
import Avatar from '../../UI/Avatar';
import { MobileNavLink } from '../NavItems/NavLink/NavLink';
import * as S from './RightDrawer.styles';

interface LeftDrawerProps {
  open: boolean;
  handleToggleDrawer: MouseEventHandler;
}

const LeftDrawer = ({ open, handleToggleDrawer }: LeftDrawerProps) => {
  const theme = useTheme();
  const { authData, saveAuthData } = useContext(AuthContext);

  return (
    <Drawer
      open={open}
      onClose={handleToggleDrawer}
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
          <MobileNavLink to='/zaloguj' onClick={handleToggleDrawer} icon={<LoginIcon />}>
            Zaloguj się
          </MobileNavLink>
        )}
        <MobileNavLink
          to='/x'
          onClick={(e) => {
            saveAuthData({});
            handleToggleDrawer(e);
          }}
          icon={<LogoutIcon />}
        >
          Wyloguj się
        </MobileNavLink>
        <MobileNavLink to='/ustawienia' onClick={handleToggleDrawer} icon={<SettingsIcon />}>
          Ustawienia
        </MobileNavLink>
        <MobileNavLink to='/o-aplikacji' onClick={handleToggleDrawer} icon={<AppInfoIcon />}>
          O aplikacji
        </MobileNavLink>
      </List>
      <Divider variant='middle' />
    </Drawer>
  );
};

export default LeftDrawer;
