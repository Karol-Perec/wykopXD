import LinksList from 'components/Links/LinksList/LinksList';
import usePromotedLinks from 'hooks/usePromotedLinks';
import ErrorMessage from '../../components/UI/Error';

const Main = () => {
  const { data, isLoading, error, fetchNextPage, isFetchingNextPage } = usePromotedLinks();

  if (error) return <ErrorMessage error={error} />;

  return (
    <LinksList
      links={data?.pages.flat()}
      isLoading={isLoading || isFetchingNextPage}
      onInfiniteScroll={fetchNextPage}
    />
  );
};

export default Main;
