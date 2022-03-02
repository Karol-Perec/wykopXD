import { Container } from '@mui/material';
import { Link } from 'types';
import useInfiniteScrolling from '../../../hooks/useInfiniteScrolling';
import LinkAbstract from '../LinkAbstract/LinkAbstract';
import LinkAbstractSkeleton from '../LinkAbstract/LinkAbstractSkeleton';

interface LinksListProps {
  links?: Link[];
  isLoading: boolean;
  onInfiniteScroll: () => void;
}

const linkAbstractSkeletons = [...Array(Math.floor(window.innerHeight / 166))].map((_, idx) => (
  <LinkAbstractSkeleton key={`skeleton-${idx + 1}`} />
));

const LinksList = ({ links, isLoading, onInfiniteScroll }: LinksListProps) => {
  const lastLinkRef = useInfiniteScrolling(isLoading, onInfiniteScroll);
  const lastLink = links?.pop();

  return (
    <Container maxWidth='md'>
      {links?.map((link) => (
        <LinkAbstract link={link} key={link.id} />
      ))}
      {lastLink && <LinkAbstract link={lastLink} containerRef={lastLinkRef} />}
      {isLoading && linkAbstractSkeletons}
    </Container>
  );
};

export default LinksList;
