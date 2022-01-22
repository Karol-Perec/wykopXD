import * as S from './Logo.styles';

export interface LogoProps {
  color?: string;
  transform?: string;
}

export const Logo = ({ color, transform }: LogoProps) => (
  <S.Logo color={color} transform={transform} />
);
