import { MouseEventHandler } from 'react';
import { Link } from 'react-router-dom';
import { Divider } from '@mui/material';
import { ROUTE } from 'routes';
import { MobileNavLinks } from '../NavItems/NavLinks';
import * as S from './Drawers.styles';
import Drawer from '../../UI/Drawer';

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
    <S.NavContainer>
      <MobileNavLinks onNavLinkClick={onUserAction} />
    </S.NavContainer>
    <Divider variant='middle' />
  </Drawer>
);

export default LeftDrawer;
