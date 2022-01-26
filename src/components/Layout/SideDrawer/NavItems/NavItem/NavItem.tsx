import { ReactNode } from 'react';
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { NavLink } from 'react-router-dom';

interface NavItemProps {
  children: ReactNode;
  icon: ReactNode;
  to: string;
}

const NavItem = ({ children, icon, to }: NavItemProps) => {
  return (
    <ListItemButton component={NavLink} to={to}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText>{children}</ListItemText>
    </ListItemButton>
  );
};

export default NavItem;
