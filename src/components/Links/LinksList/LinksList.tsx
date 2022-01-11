import { Link } from '../../../types/Link.type';
import { LinkAbstract } from '../LinkAbstract/LinkAbstract';
import * as S from './LinksList.styles';

interface LinksListProps {
  links: Link[] | undefined;
}

export const LinksList = ({ links }: LinksListProps) => {
  return (
    <S.Container>
      {links?.map((link) => (
        <LinkAbstract link={link} key={link.id} />
      ))}
    </S.Container>
  );
};
