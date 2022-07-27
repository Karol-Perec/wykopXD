import EntriesList from 'components/Entries/EntriesList/EntriesList';
import CategoryButton from 'components/Layout/TopBar/CategoryButton/CategoryButton';
import ErrorMessage from 'components/UI/ErrorMessage';
import useEntries from 'hooks/api/useEntries';
import useTitle from 'hooks/useTitle';
import { ROUTE } from 'routes';
import { MikroblogCategory, CategoryOption } from 'types';

const mikroblogCategories: Record<MikroblogCategory, CategoryOption> = {
  [MikroblogCategory.NEW]: {
    path: MikroblogCategory.NEW,
    label: 'Najnowsze',
    value: 'stream',
  },
  [MikroblogCategory.ACTIVE]: {
    path: MikroblogCategory.ACTIVE,
    label: 'Aktywne',
    value: 'active',
  },
  [MikroblogCategory.HOT_6H]: {
    path: MikroblogCategory.HOT_6H,
    label: 'Gorące 6h',
    value: 'hot/period/6',
  },
  [MikroblogCategory.HOT_12H]: {
    path: MikroblogCategory.HOT_12H,
    label: 'Gorące 12h',
    value: 'hot/period/12',
  },
  [MikroblogCategory.HOT_24H]: {
    path: MikroblogCategory.HOT_24H,
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
  const { data, isLoading, fetchNextPage, isFetchingNextPage, error } = useEntries(
    activeCategory.value
  );

  if (error) return <ErrorMessage error={error} />;

  return (
    <>
      <CategoryButton
        options={Object.values(mikroblogCategories)}
        activeOption={activeCategory.label}
        baseRoute={ROUTE.MIKROBLOG}
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
