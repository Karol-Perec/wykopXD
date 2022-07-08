import EntriesList from 'components/Entries/EntriesList/EntriesList';
import ErrorMessage from 'components/UI/ErrorMessage';
import useTitle from 'hooks/useTitle';
import useEntries from 'hooks/api/useEntries';
import { MikroblogCategory, SortOption } from 'types';
import { useNavigate, useParams } from 'react-router-dom';
import SortButton from '../components/Layout/TopBar/SortButton/SortButton';
import { ROUTE } from '../routes';

const mikroblogSortOptions: SortOption[] = [
  {
    key: 'newest',
    path: ROUTE.MIKROBLOG,
    label: 'Najnowsze',
    fetchValue: 'stream',
  },
  {
    key: 'active',
    path: `${ROUTE.MIKROBLOG}/aktywne`,
    label: 'Najnowsze',
    fetchValue: 'newest',
  },
  {
    key: 'hot6h',
    path: `${ROUTE.MIKROBLOG}hot/ostatnie/6/`,
    label: 'Gorące 6h',
    fetchValue: 'hot/period/6',
  },
  {
    key: 'hot12h',
    path: `${ROUTE.MIKROBLOG}/hot/ostatnie/12`,
    label: 'Gorące 12h',
    fetchValue: 'hot/period/12',
  },
  {
    key: 'hot24h',
    path: `${ROUTE.MIKROBLOG}/hot/ostatnie/24`,
    label: 'Gorące 24h',
    fetchValue: 'hot/period/24',
  },
];

const MikroblogPage = () => {
  useTitle('Mikroblog');

  const { sort } = useParams<'sort'>();
  const navigate = useNavigate();
  if (sort && !mikroblogSortOptions[sort]) navigate(ROUTE.MIKROBLOG);

  const activeSortOption = mikroblogSortOptions[sort || 'hot12h'];
  const { data, isLoading, error, fetchNextPage, isFetchingNextPage } = useEntries(
    activeSortOption?.fetchValue as any
  );

  if (error) return <ErrorMessage error={error} />;

  return (
    <>
      <SortButton
        sortOptions={mikroblogSortOptions}
        activeOption={activeSortOption?.key}
      />
      <EntriesList
        entries={data?.pages.flat()}
        isLoading={isLoading || isFetchingNextPage}
        onInfiniteScroll={fetchNextPage}
      />
    </>
  );
};

export default MikroblogPage;
