import { Typography } from '@mui/material';
import useLink from 'hooks/api/useLink';
import { useParams } from 'react-router-dom';
import ErrorMessage from 'components/UI/ErrorMessage';
import useTitle from '../../hooks/useTitle';
import Loading from '../../components/UI/Loading';

const LinkDetails = () => {
  const query = useParams();
  const { data, isLoading, error } = useLink(+query.id!);
  useTitle(data && `${data.title} | WykopX`);

  if (isLoading) return <Loading />;
  if (error) return <ErrorMessage error={error} />;

  return <Typography>{JSON.stringify(data)}</Typography>;
};

export default LinkDetails;
