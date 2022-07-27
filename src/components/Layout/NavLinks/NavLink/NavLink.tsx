import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { MouseEventHandler, ReactNode } from 'react';
import { useMatch, Link as RouterLink } from 'react-router-dom';
import { ROUTE } from 'routes';
import * as S from './NavLink.styles';

interface NavLinkProps {
  to: string;
  label: string;
}

interface ListNavLinkProps extends NavLinkProps {
  icon: ReactNode;
  onClick: MouseEventHandler;
}

export const ListNavLink = ({ label, icon, to, onClick }: ListNavLinkProps) => {
  const match = useMatch({ path: to, end: to === ROUTE.HOME });

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
