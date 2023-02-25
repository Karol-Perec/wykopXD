import { useParams } from 'react-router-dom';
import useHits, { HitsSortParam } from '~/api/useHits';
import SortSelect from '~/components/Layout/TopBar/SortSelect/SortSelect';
import LinksList from '~/components/Links/LinksList/LinksList';
import ErrorMessage from '~/components/UI/ErrorMessage';
import useTitle from '~/hooks/useTitle';
import { ROUTE } from '~/routes';
import { SortOption } from '~/types';
import { filterUniqueData } from '~/utils/dataUtils';

enum HitsSort {
  DAY = 'dnia',
  WEEK = 'tygodnia',
  MONTH = 'miesiaca',
  YEAR = 'roku',
}

const hitsSortParams: Record<HitsSort, HitsSortParam> = {
  [HitsSort.DAY]: 'day',
  [HitsSort.WEEK]: 'week',
  [HitsSort.MONTH]: 'all',
  [HitsSort.YEAR]: 'all',
};

const hitsSortOptions: SortOption[] = [
  { path: HitsSort.DAY, label: 'Dnia' },
  { path: HitsSort.WEEK, label: 'Tygodnia' },
  { path: HitsSort.MONTH, label: 'Miesiąca' }, // , datePick: ['month', 'year']
  { path: HitsSort.YEAR, label: 'Roku' }, // , datePick: ['year']
];

const HitsPage = () => {
  useTitle('Hity');
  const {
    sort = HitsSort.WEEK,
    month = new Date().getMonth(),
    year = new Date().getFullYear(),
  } = useParams<{ sort?: HitsSort; month?: string; year?: string }>();
  const { data, isLoading, fetchNextPage, isFetchingNextPage, error } = useHits(
    hitsSortParams[sort],
    sort === HitsSort.MONTH || sort === HitsSort.YEAR ? Number(year) || undefined : undefined,
    sort === HitsSort.MONTH ? Number(month) || undefined : undefined
  );

  if (error) return <ErrorMessage error={error} />;

  return (
    <>
      <SortSelect options={hitsSortOptions} activeOptionPath={sort} baseRoute={ROUTE.HITS} />
      <LinksList
        links={filterUniqueData(data?.pages.flat())}
        isLoading={isLoading || isFetchingNextPage}
        onInfiniteScroll={fetchNextPage}
      />
    </>
  );
};

export default HitsPage;
