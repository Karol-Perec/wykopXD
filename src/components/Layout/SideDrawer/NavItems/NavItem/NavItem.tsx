import { ReactNode } from 'react';
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useMatch, Link as RouterLink } from 'react-router-dom';

interface NavItemProps {
  children: ReactNode;
  icon: ReactNode;
  to: string;
}

const NavItem = ({ children, icon, to }: NavItemProps) => {
  const match = useMatch(to);

  return (
    <li>
      <ListItemButton selected={!!match} component={RouterLink} to={to}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText>{children}</ListItemText>
      </ListItemButton>
    </li>
  );
};

export default NavItem;
