import EntriesList from 'components/Entries/EntriesList/EntriesList';
import ErrorMessage from 'components/UI/ErrorMessage';
import useTitle from 'hooks/useTitle';
import useEntries from 'hooks/api/useEntries';
import { MikroblogCategory, CategoryOption } from 'types';
import CategoryButton from 'components/Layout/TopBar/CategoryButton/CategoryButton';
import { ROUTE } from 'routes';

const mikroblogCategories: Record<MikroblogCategory, CategoryOption> = {
  [MikroblogCategory.NEW]: {
    path: `${ROUTE.MIKROBLOG}/najnowsze`,
    label: 'Najnowsze',
    value: 'stream',
  },
  [MikroblogCategory.ACTIVE]: {
    path: `${ROUTE.MIKROBLOG}/aktywne`,
    label: 'Aktywne',
    value: 'newest',
  },
  [MikroblogCategory.HOT_6H]: {
    path: `${ROUTE.MIKROBLOG}hot/ostatnie/6/`,
    label: 'Gorące 6h',
    value: 'hot/period/6',
  },
  [MikroblogCategory.HOT_12H]: {
    path: `${ROUTE.MIKROBLOG}/hot/ostatnie/12`,
    label: 'Gorące 12h',
    value: 'hot/period/12',
  },
  [MikroblogCategory.HOT_24H]: {
    path: `${ROUTE.MIKROBLOG}/hot/ostatnie/24`,
    label: 'Gorące 24h',
    value: 'hot/period/24',
  },
};

interface MikroblogPageProps {
  category: MikroblogCategory;
}

const MikroblogPage = ({ category }: MikroblogPageProps) => {
  useTitle('Mikroblog');

  const activeCategory = mikroblogCategories[category];
  const { data, isLoading, error, fetchNextPage, isFetchingNextPage } = useEntries(
    activeCategory.value
  );

  if (error) return <ErrorMessage error={error} />;

  return (
    <>
      <CategoryButton
        options={Object.values(mikroblogCategories)}
        activeOption={activeCategory.label}
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
