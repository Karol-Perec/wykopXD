import { Divider, Drawer } from '@mui/material';
import { MouseEventHandler } from 'react';
import { Link } from 'react-router-dom';
import { ROUTE } from 'Routes';
import NavItems from './NavItems/NavItems';
import * as S from './SideDrawer.styles';

interface SideDrawerProps {
  open: boolean;
  onClose: MouseEventHandler;
}

const SideDrawer = ({ open, onClose }: SideDrawerProps) => (
  <Drawer open={open} onClose={onClose}>
    <S.DrawerHeader>
      <Link to={ROUTE.MAIN} onClick={onClose}>
        <S.WykopLogo />
      </Link>
    </S.DrawerHeader>
    <S.NavContainer>
      <Divider />
      <NavItems onNavItemClick={onClose} />
      <Divider />
    </S.NavContainer>
  </Drawer>
);

export default SideDrawer;
