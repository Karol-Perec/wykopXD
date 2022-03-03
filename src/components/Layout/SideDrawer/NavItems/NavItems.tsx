import { Whatshot as HitsIcon, AccountCircle as MyWykopIcon } from '@mui/icons-material';
import { List } from '@mui/material';
import { MouseEventHandler } from 'react';
import { ROUTE } from 'Routes';
import NavItem from './NavItem/NavItem';
import { MainIcon, MikroblogIcon, UpcomingIcon } from './NavItems.styles';

interface NavItemsProps {
  onNavItemClick: MouseEventHandler;
}

const NavItems = ({ onNavItemClick }: NavItemsProps) => (
  <List>
    <NavItem to={ROUTE.MAIN} onClick={onNavItemClick} icon={<MainIcon />}>
      Główna
    </NavItem>

    <NavItem to={ROUTE.UPCOMING} onClick={onNavItemClick} icon={<UpcomingIcon />}>
      Wykopalisko
    </NavItem>

    <NavItem to={ROUTE.HITS} onClick={onNavItemClick} icon={<HitsIcon />}>
      Hity
    </NavItem>

    <NavItem to={ROUTE.MIKROBLOG} onClick={onNavItemClick} icon={<MikroblogIcon />}>
      Mikroblog
    </NavItem>

    <NavItem to={ROUTE.MY_WYKOP} onClick={onNavItemClick} icon={<MyWykopIcon />}>
      Mój Wykop
    </NavItem>
  </List>
);

export default NavItems;
