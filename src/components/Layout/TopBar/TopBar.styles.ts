import { styled, alpha, AppBar, Button } from '@mui/material';
import { ReactComponent as SvgLogo } from 'assets/images/logo.svg';

export const TopBar = styled(AppBar)(({ theme }) => ({
  backdropFilter: 'blur(10px)',
  backgroundColor: alpha(
    theme.palette.mode === 'dark' ? theme.palette.background.default : theme.palette.primary.main,
    0.8
  ),
  transition: 'background-color 0.3s ease-out 0s',
}));

export const Logo = styled(SvgLogo)(({ theme }) => ({
  height: 40,
  width: 100,
  fill: theme.palette.mode === 'dark' ? theme.palette.primary.main : 'white',
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

export const LinkButton = styled(Button)(({ theme }) => ({
  color: theme.palette.common.white,
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

export const NavContainer = styled('nav')(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.up('md')]: {
    display: 'flex',
    flexGrow: 1,
  },
}));

export const MenuTogglerContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexGrow: 1,
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}));
