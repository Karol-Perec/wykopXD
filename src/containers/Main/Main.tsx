import { Typography } from '@mui/material';
import LinksList from 'components/Links/LinksList/LinksList';
import usePromotedLinks from 'hooks/usePromotedLinks';

const Main = () => {
  const { data, isLoading, error, fetchNextPage, isFetchingNextPage } = usePromotedLinks();

  if (error) return <Typography>{(error as Error)?.message}</Typography>;

  return (
    <LinksList
      links={data?.pages.flat()}
      isLoading={isLoading || isFetchingNextPage}
      onInfiniteScroll={fetchNextPage}
    />
  );
};

export default Main;
