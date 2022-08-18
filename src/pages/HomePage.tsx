import LinksList from '~/components/Links/LinksList/LinksList';
import ErrorMessage from '~/components/UI/ErrorMessage';
import useLinks from '~/hooks/api/useLinks';

const HomePage = () => {
  const { data, isLoading, fetchNextPage, isFetchingNextPage, error } = useLinks('promoted');

  if (error) return <ErrorMessage error={error} />;

  return (
    <LinksList
      links={data?.pages.flat()}
      isLoading={isLoading || isFetchingNextPage}
      onInfiniteScroll={fetchNextPage}
    />
  );
};

export default HomePage;
