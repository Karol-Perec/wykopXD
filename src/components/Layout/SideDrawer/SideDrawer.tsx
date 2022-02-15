import { Divider, Drawer, ListItemIcon } from '@mui/material';
import Logo from 'components/Logo/Logo';
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
    <nav>
      <ListItemIcon>
        <S.WykopMainLogoContainer>
          <Link to={ROUTE.MAIN} onClick={onClose}>
            <Logo />
          </Link>
        </S.WykopMainLogoContainer>
      </ListItemIcon>
      <Divider />
      <NavItems onNavItemClick={onClose} />
      <Divider />
    </nav>
  </Drawer>
);

export default SideDrawer;
