import { Divider, Drawer } from '@mui/material';
import { MouseEventHandler } from 'react';
import { Link } from 'react-router-dom';
import { ROUTE } from 'Routes';
import NavItems from './NavItems/NavItems';
import * as S from './SideDrawer.styles';

interface SideDrawerProps {
  open: boolean;
  handleToggleSideDrawer: MouseEventHandler;
}

const SideDrawer = ({ open, handleToggleSideDrawer }: SideDrawerProps) => (
  <Drawer open={open} onClose={handleToggleSideDrawer}>
    <S.DrawerHeader>
      <Link to={ROUTE.MAIN} onClick={handleToggleSideDrawer}>
        <S.WykopLogo />
      </Link>
    </S.DrawerHeader>
    <Divider />
    <S.NavContainer>
      <NavItems onNavItemClick={handleToggleSideDrawer} />
    </S.NavContainer>
    <Divider />
  </Drawer>
);

export default SideDrawer;
