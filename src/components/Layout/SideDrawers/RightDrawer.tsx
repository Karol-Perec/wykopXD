import {
  Login as LoginIcon,
  Logout as LogoutIcon,
  Settings as SettingsIcon,
  Info as AppInfoIcon,
} from '@mui/icons-material';
import {
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import { MouseEventHandler, useContext } from 'react';
import Avatar from '~/components/UI/Avatar';
import Drawer from '~/components/UI/Drawer';
import AuthContext from '~/contexts/Auth/AuthContext';
import { ListNavLink } from '../NavLinks/NavLink/NavLink';
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
          <ListItemButton disabled>
            <ListItemIcon>
              <LoginIcon />
            </ListItemIcon>
            <ListItemText>Zaloguj się</ListItemText>
          </ListItemButton>
          // <ListNavLink
          //   to='/zaloguj'
          //   label='Zaloguj się'
          //   onClick={onUserAction}
          //   icon={<LoginIcon />}
          // />
        )}
        {authData?.userkey && (
          <ListNavLink to='/' label='Wyloguj się' onClick={handleLogout} icon={<LogoutIcon />} />
        )}
        <ListNavLink
          to='/ustawienia'
          label='Ustawienia'
          onClick={onUserAction}
          icon={<SettingsIcon />}
        />
        <ListNavLink
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
