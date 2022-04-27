import { Whatshot as HitsIcon, AccountCircle as MyWykopIcon } from '@mui/icons-material';
import { Box, List } from '@mui/material';
import { MouseEventHandler, ReactNode } from 'react';
import { NavRoute } from 'Routes';
import { NavItem, MobileNavItem } from './NavItem/NavItem';
import { MainIcon, MikroblogIcon, UpcomingIcon } from './NavItems.styles';

interface MobileNavItemsProps {
  onNavItemClick: MouseEventHandler;
}

interface Page {
  label: string;
  path: NavRoute;
  icon: ReactNode;
}

export const navItems: Page[] = [
  {
    label: 'Główna',
    path: NavRoute.HOME,
    icon: <MainIcon />,
  },
  {
    label: 'Wykopalisko',
    path: NavRoute.UPCOMING,
    icon: <UpcomingIcon />,
  },
  {
    label: 'Hity',
    path: NavRoute.HITS,
    icon: <HitsIcon />,
  },
  {
    label: 'Mikroblog',
    path: NavRoute.MIKROBLOG,
    icon: <MikroblogIcon />,
  },
  {
    label: 'Mój Wykop',
    path: NavRoute.MY_WYKOP,
    icon: <MyWykopIcon />,
  },
];

export const MobileNavItems = ({ onNavItemClick }: MobileNavItemsProps) => (
  <List>
    {navItems.map((nav) => (
      <MobileNavItem to={nav.path} onClick={onNavItemClick} icon={nav.icon} key={nav.path}>
        {nav.label}
      </MobileNavItem>
    ))}
  </List>
);

export const NavItems = () => (
  <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
    {navItems.map((nav) => (
      <NavItem to={nav.path} key={nav.path}>
        {nav.label}
      </NavItem>
    ))}
  </Box>
);
