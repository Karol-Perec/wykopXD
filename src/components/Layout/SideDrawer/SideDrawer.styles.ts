import { ReactComponent as SvgLogo } from 'assets/images/logo.svg';
import { styled } from '@mui/material';

export const NavContainer = styled('nav')({
  width: 230,
});

export const DrawerHeader = styled('div')(({ theme }) => ({
  textAlign: 'center',
  height: 50,
  margin: theme.spacing(2),
}));

export const WykopLogo = styled(SvgLogo)(({ theme }) => ({
  height: '100%',
  fill: theme.palette.primary.main,
}));
