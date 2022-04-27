import { MouseEventHandler, PropsWithChildren, ReactNode } from 'react';
import { Button, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useMatch, Link as RouterLink } from 'react-router-dom';
import { UnstyledRouterLink } from '../../../UI/CustomLinks';

interface NavItemProps {
  to: string;
}

interface MobileNavItemProps extends NavItemProps {
  icon: ReactNode;
  onClick: MouseEventHandler;
}

export const MobileNavItem = ({
  children,
  icon,
  to,
  onClick,
}: PropsWithChildren<MobileNavItemProps>) => {
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

export const NavItem = ({ to, children }: PropsWithChildren<NavItemProps>) => {
  const match = useMatch(to);

  return (
    <Button component={UnstyledRouterLink} to={to} color={match ? 'primary' : 'inherit'}>
      {children}
    </Button>
  );
};
