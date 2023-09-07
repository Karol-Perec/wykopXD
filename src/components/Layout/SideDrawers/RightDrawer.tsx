import {
  Login as LoginIcon,
  Logout as LogoutIcon,
  Settings as SettingsIcon,
  Info as AppInfoIcon,
} from '@mui/icons-material';
import { Divider, List, Typography } from '@mui/material';
import { useQueryClient } from '@tanstack/react-query';
import { MouseEventHandler, useContext } from 'react';
import Avatar from '~/components/UI/CustomAvatar';
import Drawer from '~/components/UI/Drawer';
import AuthContext from '~/contexts/Auth/AuthContext';
import { ListNavLink } from '../NavLinks/NavLink/NavLink';
import * as S from './SideDrawers.styles';

interface RightDrawerProps {
  open: boolean;
  onUserAction: MouseEventHandler;
}

const RightDrawer = ({ open, onUserAction }: RightDrawerProps) => {
  const { authData, setAuthData } = useContext(AuthContext);
  const queryClient = useQueryClient();

  const handleLogout: MouseEventHandler = (e) => {
    setAuthData(undefined);
    queryClient.invalidateQueries();
    onUserAction(e);
  };

  return (
    <Drawer anchor='right' onUserAction={onUserAction} open={open}>
      <S.RightDrawerHeader>
        <Avatar src={authData?.user?.avatar} size={60} />
        <Typography variant='h6'>{authData?.user?.login}</Typography>
      </S.RightDrawerHeader>
      <Divider variant='middle' />
      <List>
        {!authData?.userkey && (
          <ListNavLink to='/zaloguj' label='Zaloguj się' onClick={onUserAction} icon={<LoginIcon />} />
        )}
        {authData?.userkey && <ListNavLink to='/' label='Wyloguj się' onClick={handleLogout} icon={<LogoutIcon />} />}
        <ListNavLink to='/ustawienia' label='Ustawienia' onClick={onUserAction} icon={<SettingsIcon />} />
        <ListNavLink to='/o-aplikacji' label='O aplikacji' onClick={onUserAction} icon={<AppInfoIcon />} />
      </List>
      <Divider variant='middle' />
    </Drawer>
  );
};

export default RightDrawer;
