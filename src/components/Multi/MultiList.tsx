import { Entry } from 'types/entry.types';
import useInfiniteScrolling from 'hooks/useInfiniteScrolling';
import { Link } from '../../types/link.types';
import Loading from '../UI/Loading';
import EntryAbstract from '../Entries/EntryAbstract/EntryAbstract';
import LinkAbstract from '../Links/LinkAbstract/LinkAbstract';

interface MultiListProps {
  data?: (Link | Entry)[];
  isLoading: boolean;
  onInfiniteScroll: () => void;
}

const isLink = (multi: Entry | Link): multi is Link => !!(multi as Link).title;

const MultiList = ({ data, isLoading, onInfiniteScroll }: MultiListProps) => {
  const infiniteScrollingTriggerRef = useInfiniteScrolling(isLoading, onInfiniteScroll);

  return (
    <>
      {data?.map((multi, idx) =>
        isLink(multi) ? (
          <LinkAbstract
            link={multi}
            key={multi.id}
            containerRef={idx + 2 === data.length ? infiniteScrollingTriggerRef : undefined}
          />
        ) : (
          <EntryAbstract
            entry={multi}
            key={multi.id}
            listMode
            containerRef={idx + 2 === data.length ? infiniteScrollingTriggerRef : undefined}
          />
        )
      )}
      {isLoading && <Loading />}
    </>
  );
};

export default MultiList;
