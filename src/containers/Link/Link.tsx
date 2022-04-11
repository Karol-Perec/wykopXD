import { Typography } from '@mui/material';
import useLink from 'hooks/api/useLink';
import { useParams } from 'react-router-dom';
import ErrorMessage from 'components/UI/ErrorMessage';
import LinkAbstractSkeleton from 'components/Links/LinkAbstract/LinkAbstractSkeleton';
import useTitle from '../../hooks/useTitle';

const LinkDetails = () => {
  const query = useParams();
  const { data, isLoading, error } = useLink(+query.id!);
  useTitle(data && `${data.title} | WykopX`);

  if (isLoading) return <LinkAbstractSkeleton />;
  if (error) return <ErrorMessage error={error} />;

  return <Typography>{JSON.stringify(data)}</Typography>;
};

export default LinkDetails;
