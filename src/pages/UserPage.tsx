import { Container } from '@mui/material';
import { useParams } from 'react-router-dom';
import useUser from '~/api/users/useUser';
import useUserActions from '~/api/users/useUserActions';
import ContentList from '~/components/ContentList/ContentList';
import ErrorMessage from '~/components/UI/ErrorMessage';
import useTitle from '~/hooks/useTitle';
import { filterUniqueData } from '~/utils/dataUtils';

const UserPage = () => {
  const { username } = useParams();
  useTitle(`@${username}`);
  const actions = useUserActions(username!);
  const user = useUser(username!);

  const handleInititeScroll = () => {
    if (!actions.data || actions.data.pages?.at(-1)?.length) {
      actions.fetchNextPage();
    }
  };

  if (actions.error) return <ErrorMessage error={actions.error} />;

  return (
    <>
      <Container disableGutters>
        {user.data?.backgroundUrl && <img src={user.data.backgroundUrl} width='100%' alt={username} />}
      </Container>

      <ContentList
        contents={filterUniqueData(actions.data?.pages.flat())}
        isLoading={actions.isLoading || actions.isFetchingNextPage}
        onInfiniteScroll={handleInititeScroll}
      />
    </>
  );
};

export default UserPage;
