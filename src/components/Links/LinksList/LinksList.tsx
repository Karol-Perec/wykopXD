import { Link } from 'types';
import useInfiniteScrolling from '../../../hooks/useInfiniteScrolling';
import Loading from '../../UI/Loading';
import LinkAbstract from '../LinkAbstract/LinkAbstract';

interface LinksListProps {
  links?: Link[];
  isLoading: boolean;
  onInfiniteScroll: () => void;
}

const LinksList = ({ links, isLoading, onInfiniteScroll }: LinksListProps) => {
  const infiniteScrollingTriggerRef = useInfiniteScrolling(isLoading, onInfiniteScroll);

  return (
    <>
      {links?.map((link, idx) => (
        <LinkAbstract
          link={link}
          key={link.id}
          containerRef={idx + 2 === links.length ? infiniteScrollingTriggerRef : undefined}
        />
      ))}
      {isLoading && <Loading />}
    </>
  );
};

export default LinksList;
