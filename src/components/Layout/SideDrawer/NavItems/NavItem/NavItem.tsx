import { MouseEventHandler, PropsWithChildren, ReactNode } from 'react';
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useMatch, Link as RouterLink } from 'react-router-dom';

interface NavItemProps {
  icon: ReactNode;
  to: string;
  onClick: MouseEventHandler;
}

const NavItem = ({ children, icon, to, onClick }: PropsWithChildren<NavItemProps>) => {
  const match = useMatch(to);

  return (
    <li>
      <ListItemButton selected={!!match} component={RouterLink} to={to} onClick={onClick}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText>{children}</ListItemText>
      </ListItemButton>
    </li>
  );
};

export default NavItem;
