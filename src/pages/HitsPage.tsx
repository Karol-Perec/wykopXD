import { useParams } from 'react-router-dom';
import LinksList from 'components/Links/LinksList/LinksList';
import ErrorMessage from 'components/UI/ErrorMessage';
import FilterButton from 'components/Layout/TopBar/SortButton/SortButton';
import useTitle from 'hooks/useTitle';
import useHits from 'hooks/api/useHits';
import { SortOption, HitsPeriod } from 'types';

const hitsSortOptions: Record<string, SortOption> = {
  active: {
    path: '/hity/aktywne',
    label: 'Aktywne',
    fetchValue: 'active',
  },
  newest: {
    path: '/hity/najnowsze',
    label: 'Najnowsze',
    fetchValue: 'newest',
  },
  voted: {
    path: '/hity/wykopywane',
    label: 'Wykopywane',
    fetchValue: 'voted',
  },
  commented: {
    path: '/hity/komentowane',
    label: 'Komentowane',
    fetchValue: 'commented',
  },
};

const HitsPage = () => {
  useTitle('Hity');
  const { sort } = useParams();
  const { data, isLoading, error, fetchNextPage, isFetchingNextPage } = useHits(HitsPeriod.WEEK);

  const handleInititeScroll = () => {
    if (!data || data.pages?.at(-1)?.length) {
      fetchNextPage();
    }
  };

  if (error) return <ErrorMessage error={error} />;

  return (
    <>
      {/* <FilterButton sortOptions={[]} /> */}
      <LinksList
        links={data?.pages.flat()}
        isLoading={isLoading || isFetchingNextPage}
        onInfiniteScroll={handleInititeScroll}
      />
    </>
  );
};

export default HitsPage;
