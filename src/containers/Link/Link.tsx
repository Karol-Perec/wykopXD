import { Typography } from '@mui/material';
import useLink from 'hooks/useLink';
import { useParams } from 'react-router-dom';

const LinkDetails = () => {
  const query = useParams();
  const { data, isLoading, error } = useLink(+query.id!);

  if (error) return <p>{(error as Error)?.message}</p>;

  console.log(data);

  return <Typography>{JSON.stringify(data)}</Typography>;
};

export default LinkDetails;
