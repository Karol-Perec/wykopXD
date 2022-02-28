import { Typography } from '@mui/material';
import useLink from 'hooks/useLink';
import { useParams } from 'react-router-dom';
import ErrorMessage from '../../components/UI/Error';

const LinkDetails = () => {
  const query = useParams();
  const { data, isLoading, error } = useLink(+query.id!);

  if (error) return <ErrorMessage error={error} />;

  console.log(data);

  return <Typography>{JSON.stringify(data)}</Typography>;
};

export default LinkDetails;
