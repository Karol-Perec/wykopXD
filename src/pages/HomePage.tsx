import LinksList from '~/components/Links/LinksList/LinksList';
import ErrorMessage from '~/components/UI/ErrorMessage';
import useLinks from '~/hooks/api/useLinks';
import { filterUniqueData } from '~/utils/dataUtils';

const HomePage = () => {
  const { data, isLoading, fetchNextPage, isFetchingNextPage, error } = useLinks('homepage');

  if (error) return <ErrorMessage error={error} />;

  return (
    <LinksList
      links={filterUniqueData(data?.pages.flat())}
      isLoading={isLoading || isFetchingNextPage}
      onInfiniteScroll={fetchNextPage}
    />
  );
};

export default HomePage;
