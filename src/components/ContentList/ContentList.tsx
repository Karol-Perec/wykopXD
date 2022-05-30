import { Entry, Link } from 'types';
import useInfiniteScrolling from 'hooks/useInfiniteScrolling';
import Loading from '../UI/Loading';
import EntryDetails from '../Entries/EntryDetails/EntryDetails';
import LinkDetails from '../Links/LinkDetails/LinkDetails';

interface MultiListProps {
  data?: (Link | Entry)[];
  isLoading: boolean;
  onInfiniteScroll: () => void;
}

const isLink = (multi: Entry | Link): multi is Link => !!(multi as Link).title;

const ContentList = ({ data, isLoading, onInfiniteScroll }: MultiListProps) => {
  const infiniteScrollingTriggerRef = useInfiniteScrolling(isLoading, onInfiniteScroll);

  return (
    <>
      {data?.map((multi, idx) => {
        const ContentComponent = isLink(multi) ? LinkDetails : EntryDetails;
        return (
          <ContentComponent
            data={multi as any}
            key={multi.id}
            listMode
            containerRef={idx + 2 === data.length ? infiniteScrollingTriggerRef : undefined}
          />
        );
      })}
      {isLoading && <Loading />}
    </>
  );
};

export default ContentList;
