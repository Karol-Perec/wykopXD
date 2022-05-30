import LinksList from 'components/Links/LinksList/LinksList';
import ErrorMessage from 'components/UI/ErrorMessage';
import useTitle from 'hooks/useTitle';
import useHits from 'hooks/api/useHits';
import { HitsPeriod } from 'types';

interface HitsProps {
  period?: HitsPeriod;
}

const Hits = ({ period }: HitsProps) => {
  useTitle('Hity');
  const { data, isLoading, error, fetchNextPage, isFetchingNextPage } = useHits(
    period || HitsPeriod.WEEK
  );

  if (error) return <ErrorMessage error={error} />;

  return (
    <LinksList
      links={data?.pages.flat()}
      isLoading={isLoading || isFetchingNextPage}
      onInfiniteScroll={fetchNextPage}
    />
  );
};

export default Hits;
