import LinksList from 'components/Links/LinksList/LinksList';
import ErrorMessage from 'components/UI/ErrorMessage';
import useTitle from 'hooks/useTitle';
import useHits from 'hooks/api/useHits';
import { HitsPeriod } from 'types';

interface HitsProps {
  period?: HitsPeriod;
}

const HitsPage = ({ period }: HitsProps) => {
  useTitle('Hity');
  const { data, isLoading, error, fetchNextPage, isFetchingNextPage } = useHits(
    period || HitsPeriod.WEEK
  );

  const handleInititeScroll = () => {
    if (!data || data.pages?.at(-1)?.length) {
      fetchNextPage();
    }
  };

  if (error) return <ErrorMessage error={error} />;

  return (
    <LinksList
      links={data?.pages.flat()}
      isLoading={isLoading || isFetchingNextPage}
      onInfiniteScroll={handleInititeScroll}
    />
  );
};

export default HitsPage;
