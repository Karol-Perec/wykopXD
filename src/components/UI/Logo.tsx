import { SVGProps } from 'react';
import { styled } from '@mui/material';
import { ReactComponent as SvgLogo } from 'assets/images/logo.svg';

const Logo = styled(SvgLogo)<SVGProps<SVGSVGElement>>(({ theme }) => ({
  width: '100%',
  height: '100%',
  fill: theme.palette.primary.main,
}));

export default Logo;
