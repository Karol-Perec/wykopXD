import { alpha, Divider, Drawer, useTheme } from '@mui/material';
import { MouseEventHandler } from 'react';
import { Link } from 'react-router-dom';
import { ROUTE } from 'routes';
import { MobileNavLinks } from '../NavItems/NavLinks';
import * as S from './LeftDrawer.styles';

interface LeftDrawerProps {
  open: boolean;
  onUserAction: MouseEventHandler;
}

const LeftDrawer = ({ open, onUserAction }: LeftDrawerProps) => {
  const theme = useTheme();

  return (
    <Drawer
      open={open}
      onClose={onUserAction}
      PaperProps={{
        style: {
          backdropFilter: 'blur(10px)',
          backgroundColor: alpha(
            theme.palette.background.default,
            theme.palette.mode === 'dark' ? 0.6 : 0.8
          ),
        },
      }}
    >
      <S.DrawerHeader>
        <Link to={ROUTE.HOME} onClick={onUserAction}>
          <S.WykopLogo />
        </Link>
      </S.DrawerHeader>
      <Divider variant='middle' />
      <S.NavContainer>
        <MobileNavLinks onNavLinkClick={onUserAction} />
      </S.NavContainer>
      <Divider variant='middle' />
    </Drawer>
  );
};

export default LeftDrawer;
