import { useParams } from 'react-router-dom';
import useEntries from '~/api/useEntries';
import EntriesList from '~/components/Entries/EntriesList/EntriesList';
import SortSelect from '~/components/Layout/TopBar/SortSelect/SortSelect';
import ErrorMessage from '~/components/UI/ErrorMessage';
import useTitle from '~/hooks/useTitle';
import { ROUTE } from '~/routes';
import { MikroblogSort, SortOption } from '~/types';
import { filterUniqueData } from '~/utils/dataUtils';

const mikroblogSortOptions: SortOption[] = [
  {
    path: MikroblogSort.NEW,
    label: 'Najnowsze',
    value: 'stream',
  },
  {
    path: MikroblogSort.ACTIVE,
    label: 'Aktywne',
    value: 'active',
  },
  {
    path: MikroblogSort.HOT_2H,
    label: 'Gorące 2h',
    value: 'hot/period/2',
  },
  {
    path: MikroblogSort.HOT_6H,
    label: 'Gorące 6h',
    value: 'hot/period/6',
  },
  {
    path: MikroblogSort.HOT_12H,
    label: 'Gorące 12h',
    value: 'hot/period/12',
  },
  {
    path: MikroblogSort.HOT_24H,
    label: 'Gorące 24h',
    value: 'hot/period/24',
  },
];

const MikroblogPage = () => {
  useTitle('Mikroblog');
  const { sort = MikroblogSort.HOT_24H } = useParams<{ sort?: MikroblogSort }>();
  // const lastActive = sort ===

  const { data, isLoading, fetchNextPage, isFetchingNextPage, error } = useEntries(sort);

  if (error) return <ErrorMessage error={error} />;

  return (
    <>
      <SortSelect options={mikroblogSortOptions} activeOption={sort} baseRoute={ROUTE.MIKROBLOG} />
      <EntriesList
        entries={filterUniqueData(data?.pages.flat())}
        isLoading={isLoading || isFetchingNextPage}
        onInfiniteScroll={fetchNextPage}
      />
    </>
  );
};

export default MikroblogPage;
