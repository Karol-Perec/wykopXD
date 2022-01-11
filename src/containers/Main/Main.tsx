import { CircularProgress } from '@mui/material';
import { useState } from 'react';
import { LinksList } from '../../components/Links/LinksList/LinksList';
import { useMainLinks } from '../../hooks/useMainLinks';

export const Main = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const { data, isLoading, error } = useMainLinks(pageNumber);

  if (isLoading) return <CircularProgress size={100}/>;
  if (error) return <p>{(error as Error)?.message}</p>;

  return <LinksList links={data} />;
};
