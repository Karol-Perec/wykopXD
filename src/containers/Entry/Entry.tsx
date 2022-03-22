import useEntry from 'hooks/api/useEntry';
import { useParams } from 'react-router-dom';
import EntryAbstract from 'components/Entries/EntryAbstract/EntryAbstract';
import EntryAbstractSkeleton from 'components/Entries/EntryAbstract/EntryAbstractSkeleton';
import ErrorMessage from 'components/UI/ErrorMessage';

const Entry = () => {
  const query = useParams();
  const { data, isLoading, error } = useEntry(+query.id!);

  if (isLoading) return <EntryAbstractSkeleton />;
  if (error) return <ErrorMessage error={error} />;
  if (!data) return <ErrorMessage error='Nie znaleziono' />;

  return <EntryAbstract entry={data} />;
};

export default Entry;
