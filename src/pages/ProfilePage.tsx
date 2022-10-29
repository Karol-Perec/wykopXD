import { Container } from '@mui/material';
import { useParams } from 'react-router-dom';
import ContentList from '~/components/ContentList/ContentList';
import ErrorMessage from '~/components/UI/ErrorMessage';
import useProfile from '~/hooks/api/useProfile';
import useProfileActions from '~/hooks/api/useProfileActions';
import useTitle from '~/hooks/useTitle';

const ProfilePage = () => {
  const { username } = useParams();
  useTitle(`@${username}`);
  const actions = useProfileActions(username!);
  const profile = useProfile(username!);

  const handleInititeScroll = () => {
    if (!actions.data || actions.data.pages?.at(-1)?.length) {
      actions.fetchNextPage();
    }
  };

  if (actions.error) return <ErrorMessage error={actions.error} />;

  return (
    <>
      {/* <Container disableGutters>
        {profile?.background && <img src={profile.data.background} width='100%' alt={tag} />}
      </Container> */}

      <ContentList
        contents={actions.data?.pages.flat()}
        isLoading={actions.isLoading || actions.isFetchingNextPage}
        onInfiniteScroll={handleInititeScroll}
      />
    </>
  );
};

export default ProfilePage;
