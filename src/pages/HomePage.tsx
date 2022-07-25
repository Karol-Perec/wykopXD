import LinksList from 'components/Links/LinksList/LinksList';
import useLinks from 'hooks/api/useLinks';

const HomePage = () => {
  const { data, isLoading, fetchNextPage, isFetchingNextPage } = useLinks('promoted');

  return (
    <LinksList
      links={data?.pages.flat()}
      isLoading={isLoading || isFetchingNextPage}
      onInfiniteScroll={fetchNextPage}
    />
  );
};

export default HomePage;
