import { MouseEventHandler, PropsWithChildren, ReactNode } from 'react';
import { Button, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useMatch, Link as RouterLink } from 'react-router-dom';

interface NavLinkProps {
  to: string;
}

interface MobileNavLinkProps extends NavLinkProps {
  icon: ReactNode;
  onClick: MouseEventHandler;
}

export const MobileNavLink = ({
  children,
  icon,
  to,
  onClick,
}: PropsWithChildren<MobileNavLinkProps>) => {
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

export const NavLink = ({ to, children }: PropsWithChildren<NavLinkProps>) => {
  const match = useMatch(to);

  return (
    <Button component={RouterLink} to={to} color={match ? 'primary' : 'inherit'}>
      {children}
    </Button>
  );
};
