import { useParams } from 'react-router-dom';
import useLinks from '~/api/useLinks';
import SortSelect from '~/components/Layout/TopBar/SortSelect/SortSelect';
import LinksList from '~/components/Links/LinksList/LinksList';
import ErrorMessage from '~/components/UI/ErrorMessage';
import { HomePageSort, SortOption } from '~/types';
import { filterUniqueData } from '~/utils/dataUtils';

const homePageSortOptions: SortOption[] = [
  {
    path: HomePageSort.NEW,
    label: 'Najnowsze',
    value: 'newest',
  },
  {
    path: HomePageSort.ACTIVE,
    label: 'Aktywne',
    value: 'active',
  },
];

const HomePage = () => {
  const { sort = HomePageSort.ACTIVE } = useParams<{ sort?: HomePageSort }>();
  const { data, isLoading, fetchNextPage, isFetchingNextPage, error } = useLinks(
    'homepage',
    homePageSortOptions.find((o) => o.path === sort)?.value
  );

  if (error) return <ErrorMessage error={error} />;

  return (
    <>
      <SortSelect options={homePageSortOptions} activeOption={sort} baseRoute='' />
      <LinksList
        links={filterUniqueData(data?.pages.flat())}
        isLoading={isLoading || isFetchingNextPage}
        onInfiniteScroll={fetchNextPage}
      />
    </>
  );
};

export default HomePage;
