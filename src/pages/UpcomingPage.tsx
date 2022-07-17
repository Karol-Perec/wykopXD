import LinksList from 'components/Links/LinksList/LinksList';
import ErrorMessage from 'components/UI/ErrorMessage';
import CategoryButton from 'components/Layout/TopBar/CategoryButton/CategoryButton';
import useLinks from 'hooks/api/useLinks';
import useTitle from 'hooks/useTitle';
import { UpcomingCategory, CategoryOption } from 'types';
import { ROUTE } from 'routes';

export const upcomingCategories: Record<UpcomingCategory, CategoryOption> = {
  [UpcomingCategory.ACTIVE]: {
    path: `${ROUTE.UPCOMING}/${UpcomingCategory.ACTIVE}`,
    label: 'Aktywne',
    value: 'active',
  },
  [UpcomingCategory.NEWEST]: {
    path: `${ROUTE.UPCOMING}/${UpcomingCategory.NEWEST}`,
    label: 'Najnowsze',
    value: 'date',
  },
  [UpcomingCategory.VOTED]: {
    path: `${ROUTE.UPCOMING}/${UpcomingCategory.VOTED}`,
    label: 'Wykopywane',
    value: 'votes',
  },
  [UpcomingCategory.COMMENTED]: {
    path: `${ROUTE.UPCOMING}/${UpcomingCategory.COMMENTED}`,
    label: 'Komentowane',
    value: 'comments',
  },
};

interface UpcomingPageProps {
  category: UpcomingCategory;
}

const UpcomingPage = ({ category }: UpcomingPageProps) => {
  useTitle('Wykopalisko');
  const activeCategory = upcomingCategories[category];
  const { data, isLoading, error, fetchNextPage, isFetchingNextPage } = useLinks(
    'upcoming',
    activeCategory.value
  );

  if (error) return <ErrorMessage error={error} />;

  return (
    <>
      <CategoryButton
        options={Object.values(upcomingCategories)}
        activeOption={activeCategory.label}
      />
      <LinksList
        links={data?.pages.flat()}
        isLoading={isLoading || isFetchingNextPage}
        onInfiniteScroll={fetchNextPage}
      />
    </>
  );
};

export default UpcomingPage;
