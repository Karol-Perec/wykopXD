import { Whatshot as HitsIcon, AccountCircle as MyWykopIcon } from '@mui/icons-material';
import { List } from '@mui/material';
import { MouseEventHandler, ReactNode } from 'react';
import { NavRoute } from 'Routes';
import NavItem from './NavItem/NavItem';
import { MainIcon, MikroblogIcon, UpcomingIcon } from './NavItems.styles';

interface NavItemsProps {
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

const NavItems = ({ onNavItemClick }: NavItemsProps) => (
  <List>
    {navItems.map((nav) => (
      <NavItem to={nav.path} onClick={onNavItemClick} icon={nav.icon} key={nav.path}>
        {nav.label}
      </NavItem>
    ))}
  </List>
);

export default NavItems;
