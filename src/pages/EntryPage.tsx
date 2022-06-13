import { useLocation, useNavigationType, useParams, NavigationType } from 'react-router-dom';
import EntryDetails from 'components/Entries/EntryDetails/EntryDetails';
import ErrorMessage from 'components/UI/ErrorMessage';
import Loading from 'components/UI/Loading';
import useTitle from 'hooks/useTitle';
import useEntry from 'hooks/api/useEntry';
import { Entry } from '../types';

const EntryPage = () => {
  const { state } = useLocation();
  const navigationType = useNavigationType();
  const { id } = useParams();
  const { data, isLoading, error } = useEntry(
    id!,
    navigationType === NavigationType.Push ? (state as Entry) : undefined
  );
  useTitle(data && `@${data.user.login}: ${data.body}`);

  if (error) return <ErrorMessage error={error} />;

  return (
    <>
      {data && <EntryDetails data={data} />}
      {isLoading && <Loading />}
    </>
  );
};

export default EntryPage;
