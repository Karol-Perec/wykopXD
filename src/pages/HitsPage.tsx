import { useParams } from 'react-router-dom';
import useHits from '~/api/useHits';
import SortSelect from '~/components/Layout/TopBar/SortSelect/SortSelect';
import LinksList from '~/components/Links/LinksList/LinksList';
import ErrorMessage from '~/components/UI/ErrorMessage';
import useTitle from '~/hooks/useTitle';
import { ROUTE } from '~/routes';
import { CategoryOption, HitsCategory } from '~/types';
import { filterUniqueData } from '~/utils/dataUtils';

enum HitsSort {
  NEW = 'najnowsze',
  ACTIVE = 'aktywne',
}

const homePageSortParams: Record<HitsSort, HomePageLinksSort> = {
  [HitsCategory.POPULAR]: 'popular',
  [HitsCategory.ACTIVE]: 'active',
};

const hitsSortOptions: CategoryOption[] = [
  { path: HitsCategory.POPULAR, label: 'Popularne', value: 'popular' },
  { path: HitsCategory.DAY, label: 'Dnia', value: 'day' },
  { path: HitsCategory.WEEK, label: 'Tygodnia', value: 'week' },
  { path: HitsCategory.MONTH, label: 'Miesiąca', value: 'month', datePick: ['month', 'year'] },
  { path: HitsCategory.YEAR, label: 'Roku', value: 'year', datePick: ['year'] },
];

const HitsPage = () => {
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
      <SortSelect
        options={Object.values(hitsCategories)}
        activeOption={activeCategory.label}
        baseRoute={ROUTE.HITS}
      />
      <LinksList
        links={filterUniqueData(data?.pages.flat())}
        isLoading={isLoading || isFetchingNextPage}
        onInfiniteScroll={handleInititeScroll}
      />
    </>
  );
};

export default HitsPage;
