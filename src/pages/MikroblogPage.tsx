import EntriesList from 'components/Entries/EntriesList/EntriesList';
import ErrorMessage from 'components/UI/ErrorMessage';
import useTitle from 'hooks/useTitle';
import useEntries from 'hooks/api/useEntries';
import { MikroblogCategory } from 'types';

interface MikroblogProps {
  category?: MikroblogCategory;
}

const MikroblogPage = ({ category }: MikroblogProps) => {
  useTitle('Mikroblog');
  const { data, isLoading, error, fetchNextPage, isFetchingNextPage } = useEntries(
    category || MikroblogCategory.HOT
  );

  if (error) return <ErrorMessage error={error} />;

  return (
    <EntriesList
      entries={data?.pages.flat()}
      isLoading={isLoading || isFetchingNextPage}
      onInfiniteScroll={fetchNextPage}
    />
  );
};

export default MikroblogPage;
