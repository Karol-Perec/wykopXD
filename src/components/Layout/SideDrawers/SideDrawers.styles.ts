import { styled } from '@mui/material';
import { ReactComponent as SvgLogo } from 'assets/images/logo.svg';

export const LeftDrawerHeader = styled('div')(({ theme }) => ({
  textAlign: 'center',
  margin: theme.spacing(2),
}));

export const NavContainer = styled('nav')({
  width: 200,
});

export const WykopLogo = styled(SvgLogo)(({ theme }) => ({
  height: 50,
  fill: theme.palette.primary.main,
}));

export const RightDrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(1),
  margin: theme.spacing(2),
}));
