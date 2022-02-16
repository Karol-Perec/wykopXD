import { styled } from '@mui/material';
import { ReactComponent as SvgLogo } from 'assets/images/logo.svg';

interface LogoProps {
  style?: React.CSSProperties;
}

const Logo = styled(SvgLogo)<LogoProps>(({ theme, style }) => ({
  ...style,
  width: style?.width ?? '100%',
  height: style?.height ?? '100%',
  fill: style?.fill || theme.palette.primary.main,
}));

export default Logo;
