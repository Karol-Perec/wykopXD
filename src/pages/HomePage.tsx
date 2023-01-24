import { useParams } from 'react-router-dom';
import SortSelect from '~/components/Layout/TopBar/SortSelect/SortSelect';
import LinksList from '~/components/Links/LinksList/LinksList';
import ErrorMessage from '~/components/UI/ErrorMessage';
import useLinks from '~/hooks/api/useLinks';
import { ROUTE } from '~/routes';
import { HomePageSort, SortOption } from '~/types';
import { filterUniqueData } from '~/utils/dataUtils';

const homePageSort: Record<HomePageSort, SortOption> = {
  [HomePageSort.NEW]: {
    path: HomePageSort.NEW,
    label: 'Najnowsze',
    value: 'newest',
  },
  [HomePageSort.ACTIVE]: {
    path: HomePageSort.ACTIVE,
    label: 'Aktywne',
    value: 'active',
  },
};

const HomePage = () => {
  const params = useParams<{ sort: HomePageSort }>();
  const sort = params.sort || HomePageSort.ACTIVE;
  const { data, isLoading, fetchNextPage, isFetchingNextPage, error } = useLinks('homepage', sort);

  if (error) return <ErrorMessage error={error} />;

  return (
    <>
      <SortSelect
        options={Object.values(homePageSort)}
        activeOption={sort}
        baseRoute={ROUTE.HOME}
      />
      <LinksList
        links={filterUniqueData(data?.pages.flat())}
        isLoading={isLoading || isFetchingNextPage}
        onInfiniteScroll={fetchNextPage}
      />
    </>
  );
};

export default HomePage;
