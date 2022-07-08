import LinksList from 'components/Links/LinksList/LinksList';
import ErrorMessage from 'components/UI/ErrorMessage';
import SortButton from 'components/Layout/TopBar/SortButton/SortButton';
import useLinks from 'hooks/api/useLinks';
import useTitle from 'hooks/useTitle';
import { SortOption } from 'types';
import { useNavigate, useParams } from 'react-router-dom';
import { ROUTE } from '../routes';

export const upcomingSortOptions: SortOption[] = [
  {
    key: 'active',
    path: `${ROUTE.UPCOMING}/aktywne`,
    label: 'Aktywne',
    fetchValue: '',
  },
  {
    key: 'newest',
    path: `${ROUTE.UPCOMING}/najnowsze`,
    label: 'Najnowsze',
    fetchValue: 'sort/date',
  },
  {
    key: 'voted',
    path: `${ROUTE.UPCOMING}/wykopywane`,
    label: 'Wykopywane',
    fetchValue: 'sort/votes',
  },
  {
    key: 'commented',
    path: `${ROUTE.UPCOMING}/komentowane`,
    label: 'Komentowane',
    fetchValue: 'sort/comments',
  },
];

const UpcomingPage = () => {
  useTitle('Wykopalisko');

  const { sort } = useParams();
  const navigate = useNavigate();
  if (sort && !upcomingSortOptions[sort]) navigate(ROUTE.UPCOMING);

  const activeSortOption = upcomingSortOptions[sort || 'newest'];
  const { data, isLoading, error, fetchNextPage, isFetchingNextPage } = useLinks(
    'upcoming',
    activeSortOption?.fetchValue
  );

  console.log(sort);

  if (error) return <ErrorMessage error={error} />;

  return (
    <>
      <SortButton sortOptions={upcomingSortOptions} activeOption={activeSortOption?.label} />
      <LinksList
        links={data?.pages.flat()}
        isLoading={isLoading || isFetchingNextPage}
        onInfiniteScroll={fetchNextPage}
      />
    </>
  );
};

export default UpcomingPage;
