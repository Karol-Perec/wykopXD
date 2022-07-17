import LinksList from 'components/Links/LinksList/LinksList';
import ErrorMessage from 'components/UI/ErrorMessage';
import CategoryButton from 'components/Layout/TopBar/CategoryButton/CategoryButton';
import useTitle from 'hooks/useTitle';
import useHits from 'hooks/api/useHits';
import { CategoryOption, HitsCategory } from 'types';
import { ROUTE } from 'routes';

const hitsCategories: Record<HitsCategory, CategoryOption> = {
  [HitsCategory.POPULAR]: {
    path: `${ROUTE.HITS}/${HitsCategory.POPULAR}`,
    label: 'Popularne',
    value: 'popular',
  },
  [HitsCategory.DAY]: {
    path: `${ROUTE.HITS}/${HitsCategory.DAY}`,
    label: 'Dnia',
    value: 'day',
  },
  [HitsCategory.WEEK]: {
    path: `${ROUTE.HITS}/${HitsCategory.WEEK}`,
    label: 'Tygodnia',
    value: 'week',
  },
  [HitsCategory.MONTH]: {
    path: `${ROUTE.HITS}/${HitsCategory.MONTH}`,
    label: 'Miesiąca',
    value: 'month',
    datePick: ['month', 'year'],
  },
  [HitsCategory.YEAR]: {
    path: `${ROUTE.HITS}/${HitsCategory.YEAR}`,
    label: 'Roku',
    value: 'year',
    datePick: ['year'],
  },
};

interface HitsPageProps {
  category: HitsCategory;
}

const HitsPage = ({ category }: HitsPageProps) => {
  useTitle('Hity');

  const activeCategory = hitsCategories[category];
  const { data, isLoading, error, fetchNextPage, isFetchingNextPage } = useHits(
    activeCategory.value
  );

  const handleInititeScroll = () => {
    if (category !== HitsCategory.POPULAR && (!data || data.pages?.at(-1)?.length)) {
      fetchNextPage();
    }
  };

  if (error) return <ErrorMessage error={error} />;

  return (
    <>
      <CategoryButton options={Object.values(hitsCategories)} activeOption={activeCategory.label} />
      <LinksList
        links={data?.pages.flat()}
        isLoading={isLoading || isFetchingNextPage}
        onInfiniteScroll={handleInititeScroll}
      />
    </>
  );
};

export default HitsPage;
