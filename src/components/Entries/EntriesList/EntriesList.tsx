import { Entry } from 'types/entry.types';
import useInfiniteScrolling from 'hooks/useInfiniteScrolling';
import EntryAbstract from '../EntryAbstract/EntryAbstract';
import EntryAbstractSkeleton from '../EntryAbstract/EntryAbstractSkeleton';

interface EntriesListProps {
  entries?: Entry[];
  isLoading: boolean;
  onInfiniteScroll: () => void;
}

const entryAbstractSkeletons = [...Array(Math.floor(window.innerHeight / 166))].map((_, idx) => (
  <EntryAbstractSkeleton key={`skeleton-${idx + 1}`} />
));

const EntriesList = ({ entries, isLoading, onInfiniteScroll }: EntriesListProps) => {
  const lastEntryRef = useInfiniteScrolling(isLoading, onInfiniteScroll);
  const lastEntry = entries?.pop();

  return (
    <>
      {entries?.map((entry) => (
        <EntryAbstract entry={entry} key={entry.id} listMode />
      ))}
      {lastEntry && <EntryAbstract entry={lastEntry} containerRef={lastEntryRef} listMode />}
      {isLoading && entryAbstractSkeletons}
    </>
  );
};

export default EntriesList;
