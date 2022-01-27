import { useState } from 'react';
import { CircularProgress } from '@mui/material';
import LinksList from 'components/Links/LinksList/LinksList';
import useMainLinks from 'hooks/useMainLinks';

const Mikroblog = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const { data, isLoading, error } = useMainLinks(pageNumber);

  if (isLoading) return <CircularProgress size={100} />;
  if (error) return <p>{(error as Error)?.message}</p>;

  return 'Mikroblog';
};

export default Mikroblog;
