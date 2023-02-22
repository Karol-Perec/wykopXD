import { useParams } from 'react-router-dom';
import useLinks, { UpcomingSortParam } from '~/api/useLinks';
import SortSelect from '~/components/Layout/TopBar/SortSelect/SortSelect';
import LinksList from '~/components/Links/LinksList/LinksList';
import ErrorMessage from '~/components/UI/ErrorMessage';
import useTitle from '~/hooks/useTitle';
import { ROUTE } from '~/routes';
import { SortOption } from '~/types';
import { filterUniqueData } from '~/utils/dataUtils';

export enum UpcomingSort {
  ACTIVE = 'aktywne',
  NEWEST = 'najnowsze',
  DIGGED = 'wykopywane',
  COMMENTED = 'komentowane',
}

const upcomingSortParams: Record<UpcomingSort, UpcomingSortParam> = {
  [UpcomingSort.NEWEST]: 'newest',
  [UpcomingSort.ACTIVE]: 'active',
  [UpcomingSort.DIGGED]: 'digged',
  [UpcomingSort.COMMENTED]: 'commented',
};

export const upcomingSortOptions: SortOption[] = [
  { path: UpcomingSort.NEWEST, label: 'Najnowsze' },
  { path: UpcomingSort.ACTIVE, label: 'Aktywne' },
  { path: UpcomingSort.DIGGED, label: 'Wykopywane' },
  { path: UpcomingSort.COMMENTED, label: 'Komentowane' },
];

const UpcomingPage = () => {
  useTitle('Wykopalisko');
  const { sort = UpcomingSort.ACTIVE } = useParams<{ sort?: UpcomingSort }>();
  const { data, isLoading, fetchNextPage, isFetchingNextPage, error } = useLinks(
    'upcoming',
    upcomingSortParams[sort]
  );

  if (error) return <ErrorMessage error={error} />;

  return (
    <>
      <SortSelect
        options={upcomingSortOptions}
        activeOptionPath={sort}
        baseRoute={ROUTE.UPCOMING}
      />
      <LinksList
        links={filterUniqueData(data?.pages.flat())}
        isLoading={isLoading || isFetchingNextPage}
        onInfiniteScroll={fetchNextPage}
      />
    </>
  );
};

export default UpcomingPage;
