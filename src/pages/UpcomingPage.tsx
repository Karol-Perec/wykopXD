import { useParams } from 'react-router-dom';
import useLinks, { UpcomingSortParam } from '~/api/links/useLinks';
import SortSelect from '~/components/Layout/TopBar/SortSelect/SortSelect';
import LinksList from '~/components/Links/LinksList/LinksList';
import ErrorMessage from '~/components/UI/ErrorMessage';
import useTitle from '~/hooks/useTitle';
import { Route } from '~/routes';
import { SortOption } from '~/types';
import { filterUniqueData } from '~/utils/dataUtils';

enum UpcomingSort {
  ACTIVE = 'aktywne',
  NEWEST = 'najnowsze',
  DIGGED = 'wykopywane',
  COMMENTED = 'komentowane',
}

const UPCOMING_SORT_PARAMS: Record<UpcomingSort, UpcomingSortParam> = {
  [UpcomingSort.NEWEST]: 'newest',
  [UpcomingSort.ACTIVE]: 'active',
  [UpcomingSort.DIGGED]: 'digged',
  [UpcomingSort.COMMENTED]: 'commented',
};

export const UPCOMING_SORT_OPTIONS: SortOption[] = [
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
    UPCOMING_SORT_PARAMS[sort]
  );

  if (error) return <ErrorMessage error={error} />;

  return (
    <>
      <SortSelect options={UPCOMING_SORT_OPTIONS} activeOptionPath={sort} baseRoute={Route.UPCOMING} />
      <LinksList
        links={filterUniqueData(data?.pages.flat())}
        isLoading={isLoading || isFetchingNextPage}
        onInfiniteScroll={fetchNextPage}
      />
    </>
  );
};

export default UpcomingPage;
