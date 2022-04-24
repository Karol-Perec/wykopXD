import useEntry from 'hooks/api/useEntry';
import { useParams } from 'react-router-dom';
import EntryAbstract from 'components/Entries/EntryAbstract/EntryAbstract';
import ErrorMessage from 'components/UI/ErrorMessage';
import useTitle from '../../hooks/useTitle';
import Loading from '../../components/UI/Loading';

const Entry = () => {
  const { id } = useParams();
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const { data, isLoading, error } = useEntry(id!);
  useTitle(data && `@${data.user.login}: ${data.body}`);

  if (isLoading) return <Loading />;
  if (error) return <ErrorMessage error={error} />;
  if (!data) return <ErrorMessage error='Nie znaleziono' />;

  return <EntryAbstract entry={data} />;
};

export default Entry;
