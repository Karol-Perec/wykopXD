import { useLocation, useNavigationType, useParams, NavigationType } from 'react-router-dom';
import EntryDetails from 'components/Entries/EntryDetails/EntryDetails';
import Loading from 'components/UI/Loading';
import useTitle from 'hooks/useTitle';
import useEntry from 'hooks/api/useEntry';
import { Entry } from '../types';

const EntryPage = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const navigationType = useNavigationType();
  const { data, isLoading } = useEntry(
    id!,
    navigationType === NavigationType.Push && state ? (state as Entry) : undefined
  );
  useTitle(`Wpis użytkownika ${data ? `@${data.user.login}` : ''}`);

  return (
    <>
      {data && <EntryDetails data={data} isUpdatingComments={isLoading} />}
      {isLoading && <Loading />}
    </>
  );
};

export default EntryPage;
