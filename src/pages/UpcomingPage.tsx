import CategoryButton from '~/components/Layout/TopBar/CategoryButton/CategoryButton';
import LinksList from '~/components/Links/LinksList/LinksList';
import ErrorMessage from '~/components/UI/ErrorMessage';
import useLinks from '~/hooks/api/useLinks';
import useTitle from '~/hooks/useTitle';
import { ROUTE } from '~/routes';
import { UpcomingCategory, CategoryOption } from '~/types';
import { filterUniqueData } from '~/utils/dataUtils';

export const upcomingCategories: Record<UpcomingCategory, CategoryOption> = {
  [UpcomingCategory.ACTIVE]: {
    path: UpcomingCategory.ACTIVE,
    label: 'Aktywne',
    value: 'active',
  },
  [UpcomingCategory.NEWEST]: {
    path: UpcomingCategory.NEWEST,
    label: 'Najnowsze',
    value: 'date',
  },
  [UpcomingCategory.VOTED]: {
    path: UpcomingCategory.VOTED,
    label: 'Wykopywane',
    value: 'votes',
  },
  [UpcomingCategory.COMMENTED]: {
    path: UpcomingCategory.COMMENTED,
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
  const { data, isLoading, fetchNextPage, isFetchingNextPage, error } = useLinks(
    'upcoming',
    activeCategory.value
  );

  if (error) return <ErrorMessage error={error} />;

  return (
    <>
      <CategoryButton
        options={Object.values(upcomingCategories)}
        activeOption={activeCategory.label}
        baseRoute={ROUTE.UPCOMING}
      />
      <LinksList
        links={filterUniqueData(data?.pages.flat())}
        isLoading={isLoading || isFetchingNextPage}
        onInfiniteScroll={fetchNextPage}
      />
    </>
  );
};

export default UpcomingPage;
