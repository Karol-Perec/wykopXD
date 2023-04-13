import { useParams } from 'react-router-dom';
import useEntries, { EntriesSort } from '~/api/useEntries';
import EntriesList from '~/components/Entries/EntriesList/EntriesList';
import SortSelect from '~/components/Layout/TopBar/SortSelect/SortSelect';
import ErrorMessage from '~/components/UI/ErrorMessage';
import useTitle from '~/hooks/useTitle';
import { ROUTE } from '~/routes';
import { SortOption } from '~/types';
import { filterUniqueData } from '~/utils/dataUtils';

enum MikroblogSort {
  NEW = 'najnowsze',
  ACTIVE = 'aktywne',
  HOT = 'gorace',
}

enum MikroblogLastUpdate {
  HOURS_2 = '2',
  HOURS_6 = '6',
  HOURS_12 = '12',
  HOURS_24 = '24',
}

const entriesSortParams: Record<MikroblogSort, EntriesSort> = {
  [MikroblogSort.NEW]: 'newest',
  [MikroblogSort.ACTIVE]: 'active',
  [MikroblogSort.HOT]: 'hot',
};

const MIKROBLOG_SORT_OPTIONS: SortOption[] = [
  { path: MikroblogSort.NEW, label: 'Najnowsze' },
  { path: MikroblogSort.ACTIVE, label: 'Aktywne' },
  { path: `${MikroblogSort.HOT}/${MikroblogLastUpdate.HOURS_2}`, label: 'Gorące 2h' },
  { path: `${MikroblogSort.HOT}/${MikroblogLastUpdate.HOURS_6}`, label: 'Gorące 6h' },
  { path: `${MikroblogSort.HOT}/${MikroblogLastUpdate.HOURS_12}`, label: 'Gorące 12h' },
  { path: `${MikroblogSort.HOT}/${MikroblogLastUpdate.HOURS_24}`, label: 'Gorące 24h' },
];

const MikroblogPage = () => {
  useTitle('Mikroblog');
  const { sort = MikroblogSort.HOT, lastUpdate = MikroblogLastUpdate.HOURS_12 } = useParams<{
    sort?: MikroblogSort;
    lastUpdate?: MikroblogLastUpdate;
  }>();

  const { data, isLoading, fetchNextPage, isFetchingNextPage, error } = useEntries(
    entriesSortParams[sort],
    sort === MikroblogSort.HOT ? lastUpdate : undefined
  );

  if (error) return <ErrorMessage error={error} />;

  return (
    <>
      <SortSelect
        options={MIKROBLOG_SORT_OPTIONS}
        activeOptionPath={[sort, lastUpdate].filter(Boolean).join('/')}
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
