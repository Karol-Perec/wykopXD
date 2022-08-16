import { useParams } from 'react-router-dom';
import CategoryButton from '~/components/Layout/TopBar/CategoryButton/CategoryButton';
import LinksList from '~/components/Links/LinksList/LinksList';
import ErrorMessage from '~/components/UI/ErrorMessage';
import useHits from '~/hooks/api/useHits';
import useTitle from '~/hooks/useTitle';
import { ROUTE } from '~/routes';
import { CategoryOption, HitsCategory } from '~/types';

const hitsCategories: Record<HitsCategory, CategoryOption> = {
  [HitsCategory.POPULAR]: {
    path: HitsCategory.POPULAR,
    label: 'Popularne',
    value: 'popular',
  },
  [HitsCategory.DAY]: {
    path: HitsCategory.DAY,
    label: 'Dnia',
    value: 'day',
  },
  [HitsCategory.WEEK]: {
    path: HitsCategory.WEEK,
    label: 'Tygodnia',
    value: 'week',
  },
  [HitsCategory.MONTH]: {
    path: HitsCategory.MONTH,
    label: 'Miesiąca',
    value: 'month',
    datePick: ['month', 'year'],
  },
  [HitsCategory.YEAR]: {
    path: HitsCategory.YEAR,
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
  const { year, month } = useParams<{ year: string; month: string }>();
  const activeCategory = hitsCategories[category];
  const { data, isLoading, fetchNextPage, isFetchingNextPage, error } = useHits(
    activeCategory.value,
    Number(year) || undefined,
    Number(month) || undefined
  );

  const handleInititeScroll = () => {
    if (category !== HitsCategory.POPULAR && (!data || data.pages?.at(-1)?.length)) {
      fetchNextPage();
    }
  };

  if (error) return <ErrorMessage error={error} />;

  return (
    <>
      <CategoryButton
        options={Object.values(hitsCategories)}
        activeOption={activeCategory.label}
        baseRoute={ROUTE.HITS}
      />
      <LinksList
        links={data?.pages.flat()}
        isLoading={isLoading || isFetchingNextPage}
        onInfiniteScroll={handleInititeScroll}
      />
    </>
  );
};

export default HitsPage;
