import { Whatshot as HitsIcon, AccountCircle as MyWykopIcon } from '@mui/icons-material';
import { List } from '@mui/material';
import { MouseEventHandler } from 'react';
import { ROUTE } from 'Routes';
import NavItem from './NavItem/NavItem';
import * as S from './NavItems.styles';

interface NavItemsProps {
  onNavItemClick: MouseEventHandler;
}

const NavItems = ({ onNavItemClick }: NavItemsProps) => (
  <List>
    <NavItem onClick={onNavItemClick} icon={<S.MainIcon />} to={ROUTE.MAIN}>
      Główna
    </NavItem>

    <NavItem onClick={onNavItemClick} icon={<S.UpcomingIcon />} to={ROUTE.UPCOMING}>
      Wykopalisko
    </NavItem>

    <NavItem onClick={onNavItemClick} icon={<HitsIcon />} to={ROUTE.HITS}>
      Hity
    </NavItem>

    <NavItem onClick={onNavItemClick} icon={<S.MikroblogIcon />} to={ROUTE.MIKROBLOG}>
      Mikroblog
    </NavItem>

    <NavItem onClick={onNavItemClick} icon={<MyWykopIcon />} to={ROUTE.MY_WYKOP}>
      Mój wykop
    </NavItem>
  </List>
);

export default NavItems;
