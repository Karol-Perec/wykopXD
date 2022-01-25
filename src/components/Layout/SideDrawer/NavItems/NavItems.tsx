import { List, useTheme } from '@mui/material';
import { AccountCircle, TravelExplore, Whatshot } from '@mui/icons-material';
import { Logo } from '../../../Logo/Logo';
import * as S from './NavItems.styles';
import { NavItem } from './NavItem/NavItem';
import { ROUTE } from '../../../../routes';

export const NavItems = () => {
  const theme = useTheme();

  return (
    <List>
      <NavItem
        icon={
          <S.WykopLogoContainer>
            <Logo color={theme.palette.action.active} />
          </S.WykopLogoContainer>
        }
        to={ROUTE.MAIN}>
        Główna
      </NavItem>

      <NavItem icon={<TravelExplore />} to={ROUTE.UPCOMING}>
        Wykopalisko
      </NavItem>

      <NavItem icon={<Whatshot />} to={ROUTE.HITS}>
        Hity
      </NavItem>

      <NavItem
        icon={
          <S.WykopLogoContainer>
            <Logo
              transform='rotate(180deg)'
              color={theme.palette.action.active}
            />
          </S.WykopLogoContainer>
        }
        to={ROUTE.MIKROBLOG}>
        Mikroblog
      </NavItem>

      <NavItem icon={<AccountCircle />} to='/moj'>
        Mój wykop
      </NavItem>
    </List>
  );
};
