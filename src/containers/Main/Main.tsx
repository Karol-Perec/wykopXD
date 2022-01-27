import { useState } from 'react';
import { CircularProgress } from '@mui/material';
import LinksList from 'components/Links/LinksList/LinksList';
import usePromotedLinks from 'hooks/usePromotedLinks';

const Main = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, error } = usePromotedLinks(page);

  if (isLoading) return <CircularProgress size={100} />;
  if (error) return <p>{(error as Error)?.message}</p>;

  return <LinksList links={data} />;
};

export default Main;
