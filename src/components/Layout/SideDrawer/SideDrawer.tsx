import { Divider, Drawer, ListItemIcon } from '@mui/material';
import Logo from 'components/Logo/Logo';
import { Link } from 'react-router-dom';
import { ROUTE } from 'routes';
import NavItems from './NavItems/NavItems';
import * as S from './SideDrawer.styles';

interface SideDrawerProps {
  open: boolean;
  onBackdropClick: any;
}

const SideDrawer = ({ open, onBackdropClick }: SideDrawerProps) => {
  return (
    <Drawer open={open} onClose={onBackdropClick}>
      <nav>
        <ListItemIcon>
          <S.WykopMainLogoContainer>
            <Link to={ROUTE.MAIN}>
              <Logo />
            </Link>
          </S.WykopMainLogoContainer>
        </ListItemIcon>
        <Divider />
        <NavItems />
        <Divider />
      </nav>
    </Drawer>
  );
};

export default SideDrawer;
