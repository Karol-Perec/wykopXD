import useLink from 'hooks/useLink';
import { useParams } from 'react-router-dom';

const Link = () => {
  const query = useParams();
  const { data, isLoading, error } = useLink(+query.id!);

  if (error) return <p>{(error as Error)?.message}</p>;

  console.log(data);

  return <>{JSON.stringify(data)}</>;
};

export default Link;
