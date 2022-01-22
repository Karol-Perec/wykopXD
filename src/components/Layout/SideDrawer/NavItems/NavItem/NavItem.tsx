import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { ReactNode } from 'react';

interface NavItemProps {
  children: ReactNode;
  icon: ReactNode;
  to: string;
}

export const NavItem = ({ children, icon, to }: NavItemProps) => {
  return (
    <ListItemButton component={NavLink} to={to}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText>{children}</ListItemText>
    </ListItemButton>
  );
};
