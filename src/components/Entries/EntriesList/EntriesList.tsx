import Loading from 'components/UI/Loading';
import useInfiniteScrolling from 'hooks/useInfiniteScrolling';
import { Entry } from 'types';
import EntryPreview from '../Entry/EntryPreview';

interface EntriesListProps {
  entries?: Entry[];
  isLoading: boolean;
  onInfiniteScroll: () => void;
}

const EntriesList = ({ entries, isLoading, onInfiniteScroll }: EntriesListProps) => {
  const infiniteScrollingTriggerRef = useInfiniteScrolling(isLoading, onInfiniteScroll);

  return (
    <>
      {entries?.map((entry, idx) => (
        <EntryPreview
          data={entry}
          key={entry.id}
          containerRef={idx + 2 === entries.length ? infiniteScrollingTriggerRef : undefined}
        />
      ))}
      {isLoading && <Loading />}
    </>
  );
};

export default EntriesList;
