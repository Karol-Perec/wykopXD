import { Entry } from 'types/entry.types';
import useInfiniteScrolling from 'hooks/useInfiniteScrolling';
import EntryAbstract from '../EntryAbstract/EntryAbstract';
import Loading from '../../UI/Loading';

interface EntriesListProps {
  entries?: Entry[];
  isLoading: boolean;
  onInfiniteScroll: () => void;
}

const EntriesList = ({ entries, isLoading, onInfiniteScroll }: EntriesListProps) => {
  const lastEntryRef = useInfiniteScrolling(isLoading, onInfiniteScroll);
  const lastEntry = entries?.pop();

  return (
    <>
      {entries?.map((entry) => (
        <EntryAbstract entry={entry} key={entry.id} listMode />
      ))}
      {lastEntry && <EntryAbstract entry={lastEntry} containerRef={lastEntryRef} listMode />}
      {isLoading && <Loading />}
    </>
  );
};

export default EntriesList;
