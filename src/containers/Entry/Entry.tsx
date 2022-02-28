import { Typography } from '@mui/material';
import useEntry from 'hooks/useEntry';
import { useParams } from 'react-router-dom';
import ErrorMessage from '../../components/UI/Error';

const Entry = () => {
  const query = useParams();
  const { data, isLoading, error } = useEntry(+query.id!);

  if (error) return <ErrorMessage error={error} />;

  return <Typography>{JSON.stringify(data)}</Typography>;
};

export default Entry;
