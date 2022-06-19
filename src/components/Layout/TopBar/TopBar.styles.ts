import { styled, alpha, AppBar } from '@mui/material';
import { ReactComponent as SvgLogo } from 'assets/images/logo.svg';

export const TopBar = styled(AppBar)(({ theme }) => ({
  backdropFilter: 'blur(10px)',
  backgroundColor: alpha(
    theme.palette.mode === 'dark' ? theme.palette.background.default : theme.palette.primary.main,
    0.8
  ),
  '@supports not ((-webkit-backdrop-filter: none) or (backdrop-filter: none))': {
    backgroundColor: alpha(
      theme.palette.mode === 'dark' ? theme.palette.background.default : theme.palette.primary.main,
      0.99
    ),
  },

  transition: 'background-color 0.3s ease-out 0s',
}));

export const Logo = styled(SvgLogo)(({ theme }) => ({
  height: 32,
  fill: theme.palette.mode === 'dark' ? theme.palette.primary.main : 'white',
}));

export const NavContainer = styled('nav')({
  display: 'flex',
  flexGrow: 1,
});

export const MenuTogglerContainer = styled('div')({
  display: 'flex',
  flexGrow: 1,
});
