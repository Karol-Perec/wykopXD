import { MouseEventHandler } from 'react';
import { useLocation } from 'react-router-dom';
import { List } from '@mui/material';
import { Whatshot as HitsIcon, AccountCircle as MyWykopIcon } from '@mui/icons-material';
import { ROUTE } from 'routes';
import { DrawerNavLink, TopBarNavLink } from './NavLink/NavLink';
import * as S from './NavLinks.styles';

export const navLinks = [
  {
    label: 'Główna',
    path: ROUTE.HOME,
    icon: <S.MainIcon />,
  },
  {
    label: 'Wykopalisko',
    path: ROUTE.UPCOMING,
    icon: <S.UpcomingIcon />,
  },
  {
    label: 'Hity',
    path: ROUTE.HITS,
    icon: <HitsIcon />,
  },
  {
    label: 'Mikroblog',
    path: ROUTE.MIKROBLOG,
    icon: <S.MikroblogIcon />,
  },
  {
    label: 'Mój Wykop',
    path: ROUTE.MY_WYKOP,
    icon: <MyWykopIcon />,
  },
];

interface DrawerNavLinksProps {
  onNavLinkClick: MouseEventHandler;
}

export const DrawerNavLinks = ({ onNavLinkClick }: DrawerNavLinksProps) => (
  <List>
    {navLinks.map((nav) => (
      <DrawerNavLink
        to={nav.path}
        label={nav.label}
        icon={nav.icon}
        key={nav.path}
        onClick={onNavLinkClick}
      />
    ))}
  </List>
);

export const NavLinks = () => {
  const location = useLocation();

  return (
    <S.NavTabs value={!!navLinks.find((l) => l.path === location.pathname) && location.pathname}>
      {navLinks.map((nav) => (
        <TopBarNavLink label={nav.label} to={nav.path} key={nav.path} value={nav.path} />
      ))}
    </S.NavTabs>
  );
};
