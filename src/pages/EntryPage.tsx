import { useLocation, useNavigationType, useParams, NavigationType } from 'react-router-dom';
import EntryDetails from 'components/Entries/EntryDetails/EntryDetails';
import ErrorMessage from 'components/UI/ErrorMessage';
import Loading from 'components/UI/Loading';
import useEntry from 'hooks/api/useEntry';
import useTitle from 'hooks/useTitle';
import { Entry } from 'types';

const EntryPage = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const navigationType = useNavigationType();
  const { data, isLoading, error } = useEntry(
    id!,
    navigationType === NavigationType.Push && state ? (state as Entry) : undefined
  );
  useTitle(`Wpis użytkownika ${data ? `@${data.user.login}` : ''}`);

  if (error) return <ErrorMessage error={error} />;

  return (
    <>
      {data && <EntryDetails data={data} isUpdatingComments={isLoading} />}
      {isLoading && <Loading />}
    </>
  );
};

export default EntryPage;
