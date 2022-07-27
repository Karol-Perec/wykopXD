import { Divider } from '@mui/material';
import { MouseEventHandler } from 'react';
import { Link } from 'react-router-dom';
import { ROUTE } from 'routes';
import Drawer from '../../UI/Drawer';
import { ListNavLinks } from '../NavLinks/NavLinks';
import * as S from './SideDrawers.styles';

interface LeftDrawerProps {
  open: boolean;
  onUserAction: MouseEventHandler;
}

const LeftDrawer = ({ open, onUserAction }: LeftDrawerProps) => (
  <Drawer anchor='left' onUserAction={onUserAction} open={open}>
    <S.LeftDrawerHeader>
      <Link to={ROUTE.HOME} onClick={onUserAction}>
        <S.WykopLogo />
      </Link>
    </S.LeftDrawerHeader>
    <Divider variant='middle' />
    <nav>
      <ListNavLinks onNavLinkClick={onUserAction} />
    </nav>
    <Divider variant='middle' />
  </Drawer>
);

export default LeftDrawer;
