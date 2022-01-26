import * as S from './Logo.styles';

export interface LogoProps {
  color?: string;
  transform?: string;
}

const Logo = ({ color, transform }: LogoProps) => (
  <S.Logo color={color} transform={transform} />
);

export default Logo;
