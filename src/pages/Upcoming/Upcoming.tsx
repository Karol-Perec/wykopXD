import LinksList from 'components/Links/LinksList/LinksList';
import useLinks from 'hooks/api/useLinks';
import ErrorMessage from 'components/UI/ErrorMessage';
import useTitle from '../../hooks/useTitle';

const Upcoming = () => {
  useTitle('Wykopalisko');
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
