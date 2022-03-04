import { Typography } from '@mui/material';
import useLink from 'hooks/useLink';
import { useParams } from 'react-router-dom';
import ErrorMessage from '../../components/ErrorBoundary/ErrorMessage';
import LinkAbstractSkeleton from '../../components/Links/LinkAbstract/LinkAbstractSkeleton';

const LinkDetails = () => {
  const query = useParams();
  const { data, isLoading, error } = useLink(+query.id!);

  if (isLoading) return <LinkAbstractSkeleton />;
  if (error) return <ErrorMessage error={error} />;

  return <Typography>{JSON.stringify(data)}</Typography>;
};

export default LinkDetails;
