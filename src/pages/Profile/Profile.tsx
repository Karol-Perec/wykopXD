import MultiList from 'components/Multi/MultiList';
import ErrorMessage from 'components/UI/ErrorMessage';
import { useParams } from 'react-router-dom';
import useTitle from 'hooks/useTitle';
import useProfileActions from 'hooks/api/useProfileActions';

const Profile = () => {
  const { username } = useParams();
  useTitle(`@${username}`);
  const { data, isLoading, error, fetchNextPage, isFetchingNextPage } = useProfileActions(
    username!
  );

  if (error) return <ErrorMessage error={error} />;

  return (
    <MultiList
      data={data?.pages.flat()}
      isLoading={isLoading || isFetchingNextPage}
      onInfiniteScroll={fetchNextPage}
    />
  );
};

export default Profile;
