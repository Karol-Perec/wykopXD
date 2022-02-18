import LinksList from '../../components/Links/LinksList/LinksList';
import useHits from '../../hooks/useHits';
import { HitsPeriod } from './hits.types';

interface HitsProps {
  period?: HitsPeriod;
}

const Hits = ({ period }: HitsProps) => {
  const { data, isLoading, error, fetchNextPage, isFetchingNextPage } = useHits(
    period ?? HitsPeriod.WEEK
  );

  if (error) return <p>{(error as Error)?.message}</p>;

  return (
    <LinksList
      links={data?.pages.flat()}
      isLoading={isLoading || isFetchingNextPage}
      onInfiniteScroll={fetchNextPage}
    />
  );
};

export default Hits;
