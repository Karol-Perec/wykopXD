import { useParams } from 'react-router-dom';
import EntryDetails from 'components/Entries/EntryDetails/EntryDetails';
import ErrorMessage from 'components/UI/ErrorMessage';
import Loading from 'components/UI/Loading';
import useTitle from 'hooks/useTitle';
import useEntry from 'hooks/api/useEntry';

const Entry = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useEntry(id!);
  useTitle(data && `@${data.user.login}: ${data.body}`);

  if (isLoading) return <Loading />;
  if (error) return <ErrorMessage error={error} />;
  if (!data) return <ErrorMessage error='Nie znaleziono' />;

  return <EntryDetails data={data} />;
};

export default Entry;
