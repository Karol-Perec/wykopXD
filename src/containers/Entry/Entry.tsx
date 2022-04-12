import { CircularProgress } from '@mui/material';
import useEntry from 'hooks/api/useEntry';
import { useParams } from 'react-router-dom';
import EntryAbstract from 'components/Entries/EntryAbstract/EntryAbstract';
import ErrorMessage from 'components/UI/ErrorMessage';
import useTitle from '../../hooks/useTitle';
import Loading from '../../components/UI/Loading';

const Entry = () => {
  const query = useParams();
  const { data, isLoading, error } = useEntry(+query.id!);
  useTitle(data && `@${data.user.login}: ${data.body} | WykopX`);

  if (isLoading) return <Loading />;
  if (error) return <ErrorMessage error={error} />;
  if (!data) return <ErrorMessage error='Nie znaleziono' />;

  return <EntryAbstract entry={data} />;
};

export default Entry;
