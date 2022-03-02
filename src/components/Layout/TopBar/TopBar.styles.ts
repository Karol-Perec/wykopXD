import { styled, alpha, AppBar, Button } from '@mui/material';
import { ReactComponent as SvgLogo } from 'assets/images/logo.svg';

export const TopBar = styled(AppBar)(({ theme }) => ({
  backdropFilter: 'blur(12px)',
  backgroundColor: alpha(
    theme.palette.mode === 'dark' ? theme.palette.background.default : theme.palette.primary.main,
    0.8
  ),
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
