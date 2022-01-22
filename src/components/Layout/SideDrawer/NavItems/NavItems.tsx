import { List, useTheme } from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { Logo } from '../../../Logo/Logo';
import { TravelExplore, Whatshot } from '@mui/icons-material';
import * as S from './NavItems.styles';
import { NavItem } from './NavItem/NavItem';

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
        to='/'>
        Główna
      </NavItem>

      <NavItem icon={<TravelExplore />} to='/wykopalisko'>
        Wykopalisko
      </NavItem>

      <NavItem icon={<Whatshot />} to='/hity'>
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
        to='/mikroblog'>
        Mikroblog
      </NavItem>

      <NavItem icon={<InboxIcon />} to='/moj'>
        Mój wykop'
      </NavItem>
    </List>
  );
};
