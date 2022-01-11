import { styled } from '@mui/material/styles';
import { ReactComponent as SvgLogo } from '../../assets/images/logo.svg';

export const Containter = styled('div')(({ theme }) => ({
  height: 50,
  width: 50,
  boxSizing: 'border-box',
  margin: 10,
}));

export const Logo = styled(SvgLogo)(({ theme }) => ({
  display: 'inline-block',
  width: '100%',
  height: '100%',
  fill: theme.palette.primary.main,
}));
