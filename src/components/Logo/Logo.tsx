import { LogoProps } from './Logo.interface';
import * as S from './Logo.styles';

const Logo = ({ color, transform }: LogoProps) => <S.Logo color={color} transform={transform} />;

export default Logo;
