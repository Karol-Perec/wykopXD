import { FixedSizeList } from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';
import { Link } from 'types';
import LinkAbstract from '../LinkAbstract/LinkAbstract';
import LinkAbstractSkeleton from '../LinkAbstract/LinkAbstractSkeleton';
import * as S from './LinksList.styles';

interface LinksListProps {
  links?: Link[];
  isLoading: boolean;
}

const LinksList = ({ links, isLoading }: LinksListProps) => {
  const linkAbstractSkeletons = [...Array(links ? 2 : Math.floor(window.innerHeight / 166))].map(
    () => <LinkAbstractSkeleton />
  );

  // return <InfiniteLoader></InfiniteLoader>;

  return (
    <S.Container>
      {links?.map((link) => (
        <LinkAbstract link={link} key={link.id} />
      ))}
      {isLoading && linkAbstractSkeletons}
    </S.Container>
  );
};

export default LinksList;
