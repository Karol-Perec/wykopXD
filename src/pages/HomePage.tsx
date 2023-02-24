import { useParams } from 'react-router-dom';
import useLinks, { HomePageSortParam } from '~/api/useLinks';
import ContentList from '~/components/ContentList/ContentList';
import SortSelect from '~/components/Layout/TopBar/SortSelect/SortSelect';
import ErrorMessage from '~/components/UI/ErrorMessage';
import { SortOption } from '~/types';
import { filterUniqueData } from '~/utils/dataUtils';

enum HomePageSort {
  NEW = 'najnowsze',
  ACTIVE = 'aktywne',
}

const homePageSortParams: Record<HomePageSort, HomePageSortParam> = {
  [HomePageSort.NEW]: 'newest',
  [HomePageSort.ACTIVE]: 'active',
};

const homePageSortOptions: SortOption[] = [
  { path: HomePageSort.NEW, label: 'Najnowsze' },
  { path: HomePageSort.ACTIVE, label: 'Aktywne' },
];

const HomePage = () => {
  const { sort = HomePageSort.ACTIVE } = useParams<{ sort?: HomePageSort }>();
  const { data, isLoading, fetchNextPage, isFetchingNextPage, error } = useLinks(
    'homepage',
    homePageSortParams[sort]
  );

  if (error) return <ErrorMessage error={error} />;

  return (
    <>
      <SortSelect options={homePageSortOptions} activeOptionPath={sort} baseRoute='' />
      <ContentList
        contents={filterUniqueData(data?.pages.flat())}
        isLoading={isLoading || isFetchingNextPage}
        onInfiniteScroll={fetchNextPage}
      />
    </>
  );
};

export default HomePage;
