import { alpha, Divider, Drawer, useTheme } from '@mui/material';
import { MouseEventHandler } from 'react';
import { Link } from 'react-router-dom';
import { NavRoute } from 'Routes';
import { MobileNavLinks } from '../NavItems/NavLinks';
import * as S from './LeftDrawer.styles';

interface LeftDrawerProps {
  open: boolean;
  handleToggleDrawer: MouseEventHandler;
}

const LeftDrawer = ({ open, handleToggleDrawer }: LeftDrawerProps) => {
  const theme = useTheme();

  return (
    <Drawer
      open={open}
      onClose={handleToggleDrawer}
      PaperProps={{
        style: {
          backdropFilter: 'blur(10px)',
          backgroundColor: alpha(theme.palette.background.default, 0.6),
        },
      }}
    >
      <S.DrawerHeader>
        <Link to={NavRoute.HOME} onClick={handleToggleDrawer}>
          <S.WykopLogo />
        </Link>
      </S.DrawerHeader>
      <Divider variant='middle' />
      <S.NavContainer>
        <MobileNavLinks onNavLinkClick={handleToggleDrawer} />
      </S.NavContainer>
      <Divider variant='middle' />
    </Drawer>
  );
};

export default LeftDrawer;
