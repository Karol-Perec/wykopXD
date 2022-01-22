import { styled } from '@mui/material/styles';
import { ReactComponent as SvgLogo } from '../../assets/images/logo.svg';
import { LogoProps } from './Logo';

export const Logo = styled(SvgLogo)<LogoProps>(
  ({ theme, color, transform }) => {
    return {
      width: '100%',
      height: '100%',
      fill: color || theme.palette.primary.main,
      transform,
    };
  }
);
