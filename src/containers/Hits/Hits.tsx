import LinksList from '../../components/Links/LinksList/LinksList';
import ErrorMessage from '../../components/UI/ErrorMessage';
import useHits from '../../hooks/api/useHits';
import { HitsPeriod } from './hits.types';

interface HitsProps {
  period?: HitsPeriod;
}

const Hits = ({ period }: HitsProps) => {
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
