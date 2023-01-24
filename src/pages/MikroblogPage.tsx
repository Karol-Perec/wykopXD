import { useParams } from 'react-router-dom';
import EntriesList from '~/components/Entries/EntriesList/EntriesList';
import SortSelect from '~/components/Layout/TopBar/SortSelect/SortSelect';
import ErrorMessage from '~/components/UI/ErrorMessage';
import useEntries from '~/hooks/api/useEntries';
import useTitle from '~/hooks/useTitle';
import { ROUTE } from '~/routes';
import { MikroblogSort, SortOption } from '~/types';
import { filterUniqueData } from '~/utils/dataUtils';

const mikroblogSort: Record<MikroblogSort, SortOption> = {
  [MikroblogSort.NEW]: {
    path: MikroblogSort.NEW,
    label: 'Najnowsze',
    value: 'stream',
  },
  [MikroblogSort.ACTIVE]: {
    path: MikroblogSort.ACTIVE,
    label: 'Aktywne',
    value: 'active',
  },
  [MikroblogSort.HOT_6H]: {
    path: MikroblogSort.HOT_6H,
    label: 'Gorące 6h',
    value: 'hot/period/6',
  },
  [MikroblogSort.HOT_12H]: {
    path: MikroblogSort.HOT_12H,
    label: 'Gorące 12h',
    value: 'hot/period/12',
  },
  [MikroblogSort.HOT_24H]: {
    path: MikroblogSort.HOT_24H,
    label: 'Gorące 24h',
    value: 'hot/period/24',
  },
};

const MikroblogPage = () => {
  useTitle('Mikroblog');
  const params = useParams<{ sort: MikroblogSort }>();
  const sort = params.sort || MikroblogSort.HOT_12H;
  // const lastActive = sort === 

  const { data, isLoading, fetchNextPage, isFetchingNextPage, error } = useEntries(sort);

  if (error) return <ErrorMessage error={error} />;

  return (
    <>
      <SortSelect
        options={Object.values(mikroblogSort)}
        activeOption={sort}
        baseRoute={ROUTE.MIKROBLOG}
      />
      <EntriesList
        entries={filterUniqueData(data?.pages.flat())}
        isLoading={isLoading || isFetchingNextPage}
        onInfiniteScroll={fetchNextPage}
      />
    </>
  );
};

export default MikroblogPage;
