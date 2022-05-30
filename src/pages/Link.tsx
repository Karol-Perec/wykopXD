import { Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import ErrorMessage from 'components/UI/ErrorMessage';
import Loading from 'components/UI/Loading';
import useTitle from 'hooks/useTitle';
import useLink from 'hooks/api/useLink';

const LinkDetails = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useLink(id!);
  useTitle(data?.title);

  if (isLoading) return <Loading />;
  if (error) return <ErrorMessage error={error} />;

  return <Typography>{JSON.stringify(data)}</Typography>;
};

export default LinkDetails;
