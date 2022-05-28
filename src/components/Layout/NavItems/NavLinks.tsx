import { Whatshot as HitsIcon, AccountCircle as MyWykopIcon } from '@mui/icons-material';
import { Box, List } from '@mui/material';
import { MouseEventHandler, ReactNode } from 'react';
import { ROUTE } from 'routes';
import { NavLink, MobileNavLink } from './NavLink/NavLink';
import { MainIcon, MikroblogIcon, UpcomingIcon } from './NavLinks.styles';

interface MobileNavLinksProps {
  onNavLinkClick: MouseEventHandler;
}

interface Page {
  label: string;
  path: ROUTE;
  icon: ReactNode;
}

export const navLinks: Page[] = [
  {
    label: 'Główna',
    path: ROUTE.HOME,
    icon: <MainIcon />,
  },
  {
    label: 'Wykopalisko',
    path: ROUTE.UPCOMING,
    icon: <UpcomingIcon />,
  },
  {
    label: 'Hity',
    path: ROUTE.HITS,
    icon: <HitsIcon />,
  },
  {
    label: 'Mikroblog',
    path: ROUTE.MIKROBLOG,
    icon: <MikroblogIcon />,
  },
  {
    label: 'Mój Wykop',
    path: ROUTE.MY_WYKOP,
    icon: <MyWykopIcon />,
  },
];

export const MobileNavLinks = ({ onNavLinkClick }: MobileNavLinksProps) => (
  <List>
    {navLinks.map((nav) => (
      <MobileNavLink to={nav.path} onClick={onNavLinkClick} icon={nav.icon} key={nav.path}>
        {nav.label}
      </MobileNavLink>
    ))}
  </List>
);

export const NavLinks = () => (
  <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
    {navLinks.map((nav) => (
      <NavLink to={nav.path} key={nav.path}>
        {nav.label}
      </NavLink>
    ))}
  </Box>
);
