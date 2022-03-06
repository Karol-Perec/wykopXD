import { Typography } from '@mui/material';
import useEntry from 'hooks/api/useEntry';
import { useParams } from 'react-router-dom';
import EntryAbstractSkeleton from '../../components/Entries/EntryAbstract/EntryAbstractSkeleton';
import ErrorMessage from '../../components/UI/ErrorMessage';

const Entry = () => {
  const query = useParams();
  const { data, isLoading, error } = useEntry(+query.id!);

  if (isLoading) return <EntryAbstractSkeleton />;
  if (error) return <ErrorMessage error={error} />;

  return <Typography>{JSON.stringify(data)}</Typography>;
};

export default Entry;
