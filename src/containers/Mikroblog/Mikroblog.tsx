import useEntries from 'hooks/useEntries';
import EntriesList from '../../components/Entries/EntriesList/EntriesList';
import { MikroblogCategory } from './mikroblog.types';

interface MikroblogProps {
  category?: MikroblogCategory;
}

const Mikroblog = ({ category }: MikroblogProps) => {
  const { data, isLoading, error, fetchNextPage, isFetchingNextPage } = useEntries(
    category ?? MikroblogCategory.HOT
  );

  if (error) return <p>{(error as Error)?.message}</p>;

  return (
    <EntriesList
      entries={data?.pages.flat()}
      isLoading={isLoading || isFetchingNextPage}
      onInfiniteScroll={fetchNextPage}
    />
  );
};

export default Mikroblog;
