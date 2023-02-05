import { useLocation, useNavigationType, useParams, NavigationType } from 'react-router-dom';
import useEntry from '~/api/useEntry';
import EntryDetails from '~/components/Entries/Entry/EntryDetails';
import ErrorMessage from '~/components/UI/ErrorMessage';
import Loading from '~/components/UI/Loading';
import useTitle from '~/hooks/useTitle';
import { Entry } from '~/types';

const EntryPage = () => {
  const { id } = useParams();
  const { state }: { state: Entry } = useLocation();
  const navigationType = useNavigationType();
  const { data, isLoading, error } = useEntry(
    id!,
    navigationType === NavigationType.Push && state ? state : undefined
  );
  useTitle(`Wpis użytkownika ${data ? `@${data.author.username}` : '...'}`);

  if (error) return <ErrorMessage error={error} />;

  return (
    <>
      {data && <EntryDetails data={data} isUpdatingComments={isLoading} />}
      {isLoading && <Loading />}
    </>
  );
};

export default EntryPage;
