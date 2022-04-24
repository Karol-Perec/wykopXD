import { Typography } from '@mui/material';
import useLink from 'hooks/api/useLink';
import { useParams } from 'react-router-dom';
import ErrorMessage from 'components/UI/ErrorMessage';
import useTitle from '../../hooks/useTitle';
import Loading from '../../components/UI/Loading';

const LinkDetails = () => {
  const { id } = useParams();
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const { data, isLoading, error } = useLink(id!);
  useTitle(data?.title);

  if (isLoading) return <Loading />;
  if (error) return <ErrorMessage error={error} />;

  return <Typography>{JSON.stringify(data)}</Typography>;
};

export default LinkDetails;
