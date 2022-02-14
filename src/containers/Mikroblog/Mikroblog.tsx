import { useState } from 'react';
import { CircularProgress } from '@mui/material';
import useEntries from 'hooks/useEntries';
import { useParams } from 'react-router-dom';
import { MikroblogCategory } from './mikroblog.types';

interface MikroblogProps {
  category?: MikroblogCategory;
}

const Mikroblog = ({ category }: MikroblogProps) => {
  const [page, setPage] = useState(1);
  const params = useParams();
  console.log(params);

  const { data, isLoading, error } = useEntries(page, category ?? MikroblogCategory.HOT);

  if (isLoading) return <CircularProgress size={100} />;
  if (error) return <p>{(error as Error)?.message}</p>;

  console.log(data);

  return <div>Mikroblog</div>;
};

export default Mikroblog;
