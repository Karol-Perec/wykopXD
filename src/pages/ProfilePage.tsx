import { useParams } from 'react-router-dom';
import ContentList from 'components/ContentList/ContentList';
import ErrorMessage from 'components/UI/ErrorMessage';
import useTitle from 'hooks/useTitle';
import useProfileActions from 'hooks/api/useProfileActions';

const ProfilePage = () => {
  const { username } = useParams();
  useTitle(`@${username}`);
  const { data, isLoading, error, fetchNextPage, isFetchingNextPage } = useProfileActions(
    username!
  );

  const handleInititeScroll = () => {
    if (!data || data.pages?.at(-1)?.length) {
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

export default ProfilePage;
