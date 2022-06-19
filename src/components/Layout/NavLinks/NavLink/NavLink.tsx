import { MouseEventHandler, ReactNode } from 'react';
import { useMatch, Link as RouterLink } from 'react-router-dom';
import { ListItemButton, ListItemIcon, ListItemText, TabProps } from '@mui/material';
import * as S from './NavLink.styles';

interface NavLinkProps {
  to: string;
  label: string;
}

interface DrawerNavLinkProps extends NavLinkProps {
  icon: ReactNode;
  onClick: MouseEventHandler;
}

export const DrawerNavLink = ({ label, icon, to, onClick }: DrawerNavLinkProps) => {
  const match = useMatch(to);

  return (
    <li>
      <ListItemButton selected={!!match} component={RouterLink} to={to} onClick={onClick}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText>{label}</ListItemText>
      </ListItemButton>
    </li>
  );
};

export const TopBarNavLink = ({ to, label, ...props }: NavLinkProps & { value: string }) => (
  <S.NavLinkTab
    {...props} // eslint-disable-line react/jsx-props-no-spreading
    component={RouterLink}
    label={label}
    to={to}
    disableRipple
  />
);
