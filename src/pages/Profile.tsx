import { useParams } from 'react-router-dom';
import ContentList from 'components/ContentList/ContentList';
import ErrorMessage from 'components/UI/ErrorMessage';
import useTitle from 'hooks/useTitle';
import useProfileActions from 'hooks/api/useProfileActions';

const PROFILE_ACTIONS_PAGE_LENGTH = 25;

const Profile = () => {
  const { username } = useParams();
  useTitle(`@${username}`);
  const { data, isLoading, error, fetchNextPage, isFetchingNextPage } = useProfileActions(
    username!
  );

  const handleInititeScroll = () => {
    if (data?.pages[data.pages.length - 1].length === PROFILE_ACTIONS_PAGE_LENGTH) {
      fetchNextPage();
    }
  };

  if (error) return <ErrorMessage error={error} />;

  return (
    <ContentList
      contents={data?.pages.flat()}
      isLoading={isLoading || isFetchingNextPage}
      onInfiniteScroll={handleInititeScroll}
    />
  );
};

export default Profile;
