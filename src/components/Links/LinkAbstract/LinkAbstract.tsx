import { Link } from '../../../types/Link.type';
import { Media } from '../../Media/Media';
import * as S from './LinkAbstract.styles';

interface LinkAbstractProps {
  link: Link;
}

export const LinkAbstract = ({ link }: LinkAbstractProps) => {
  return (
    <S.Container>
      <Media
        sourceUrl={link.sourceUrl}
        preview={link.preview}
        linkTo={'/link/' + link.id}
      />
      {link.description}
    </S.Container>
  );
};
