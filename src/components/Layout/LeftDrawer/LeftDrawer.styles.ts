import { ReactComponent as SvgLogo } from 'assets/images/logo.svg';
import { styled } from '@mui/material';

export const DrawerHeader = styled('div')(({ theme }) => ({
  textAlign: 'center',
  margin: theme.spacing(2),
}));

export const NavContainer = styled('nav')({
  width: 230,
});

export const WykopLogo = styled(SvgLogo)(({ theme }) => ({
  height: 50,
  fill: theme.palette.primary.main,
}));
