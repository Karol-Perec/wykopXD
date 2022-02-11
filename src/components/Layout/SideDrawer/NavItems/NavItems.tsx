import { AccountCircle, TravelExplore, Whatshot } from '@mui/icons-material';
import { List, useTheme } from '@mui/material';
import Logo from 'components/Logo/Logo';
import { MouseEventHandler } from 'react';
import { ROUTE } from 'routes';
import NavItem from './NavItem/NavItem';
import * as S from './NavItems.styles';

interface NavItemsProps {
  onNavItemClick: MouseEventHandler;
}

const NavItems = ({ onNavItemClick }: NavItemsProps) => {
  const theme = useTheme();

  const mainPageIcon = (
    <S.WykopLogoContainer>
      <Logo color={theme.palette.action.active} />
    </S.WykopLogoContainer>
  );

  const myWykopPageIcon = (
    <S.WykopLogoContainer>
      <Logo transform='rotate(180)' color={theme.palette.action.active} />
    </S.WykopLogoContainer>
  );

  return (
    <List>
      <NavItem onClick={onNavItemClick} icon={mainPageIcon} to={ROUTE.MAIN}>
        Główna
      </NavItem>

      <NavItem
        onClick={onNavItemClick}
        icon={<TravelExplore />}
        to={ROUTE.UPCOMING}>
        Wykopalisko
      </NavItem>

      <NavItem onClick={onNavItemClick} icon={<Whatshot />} to={ROUTE.HITS}>
        Hity
      </NavItem>

      <NavItem
        onClick={onNavItemClick}
        icon={myWykopPageIcon}
        to={ROUTE.MIKROBLOG}>
        Mikroblog
      </NavItem>

      <NavItem
        onClick={onNavItemClick}
        icon={<AccountCircle />}
        to={ROUTE.MY_WYKOP}>
        Mój wykop
      </NavItem>
    </List>
  );
};

export default NavItems;
