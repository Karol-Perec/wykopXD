import LinksList from 'components/Links/LinksList/LinksList';
import useLinks from 'hooks/api/useLinks';
import ErrorMessage from 'components/UI/ErrorMessage';

const Upcoming = () => {
  const { data, isLoading, error, fetchNextPage, isFetchingNextPage } = useLinks('upcoming');

  if (error) return <ErrorMessage error={error} />;

  return (
    <LinksList
      links={data?.pages.flat()}
      isLoading={isLoading || isFetchingNextPage}
      onInfiniteScroll={fetchNextPage}
    />
  );
};

export default Upcoming;
