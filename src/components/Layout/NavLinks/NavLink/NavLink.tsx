import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { MouseEventHandler, ReactNode } from 'react';
import { useMatch, Link as RouterLink } from 'react-router-dom';
import { Route } from '~/routes';
import * as S from './NavLink.styles';

interface NavLinkProps {
  to: string;
  label: string;
}

interface ListNavLinkProps extends NavLinkProps {
  isActive: boolean;
  icon: ReactNode;
  onClick: MouseEventHandler;
}

export const ListNavLink = ({ label, isActive, icon, to, onClick }: ListNavLinkProps) => (
  <li>
    <ListItemButton selected={isActive} component={RouterLink} to={to} onClick={onClick}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText>{label}</ListItemText>
    </ListItemButton>
  </li>
);

export const TopBarNavLink = ({ to, label, ...props }: NavLinkProps & { value: string }) => (
  <S.NavLinkTab {...props} component={RouterLink} label={label} to={to} disableRipple />
);
