import { Whatshot as HitsIcon } from '@mui/icons-material';
import { List } from '@mui/material';
import { MouseEventHandler } from 'react';
import { useLocation } from 'react-router-dom';
import { Route } from '~/routes';
import { ListNavLink, TopBarNavLink } from './NavLink/NavLink';
import * as S from './NavLinks.styles';

export const navLinks = [
  {
    label: 'Główna',
    path: Route.HOME,
    icon: <S.MainIcon />,
  },
  {
    label: 'Wykopalisko',
    path: Route.UPCOMING,
    icon: <S.UpcomingIcon />,
  },
  {
    label: 'Hity',
    path: Route.HITS,
    icon: <HitsIcon />,
  },
  {
    label: 'Mikroblog',
    path: Route.MIKROBLOG,
    icon: <S.MikroblogIcon />,
  },
  // {
  //   label: 'Mój Wykop',
  //   path: Route.MY_WYKOP,
  //   icon: <AccountCircle />,
  // },
];

interface ListNavLinksProps {
  onNavLinkClick: MouseEventHandler;
}

export const ListNavLinks = ({ onNavLinkClick }: ListNavLinksProps) => {
  const { pathname } = useLocation();
  const activePath = Object.values(Route)
    .reverse()
    .find((route) => pathname.startsWith(route));

  return (
    <List>
      {navLinks.map((nav) => (
        <ListNavLink
          to={nav.path}
          label={nav.label}
          icon={nav.icon}
          isActive={nav.path === activePath}
          key={nav.path}
          onClick={onNavLinkClick}
        />
      ))}
    </List>
  );
};

export const NavLinks = () => {
  const { pathname } = useLocation();
  const activePath = Object.values(Route)
    .reverse()
    .find((route) => pathname.startsWith(route));

  return (
    <S.NavTabs value={activePath || false} component='nav'>
      {navLinks.map((nav) => (
        <TopBarNavLink label={nav.label} to={nav.path} key={nav.path} value={nav.path} />
      ))}
    </S.NavTabs>
  );
};
