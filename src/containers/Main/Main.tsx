import { useState } from 'react';
import LinksList from 'components/Links/LinksList/LinksList';
import usePromotedLinks from 'hooks/usePromotedLinks';

const Main = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, error } = usePromotedLinks(page);

  if (error) return <p>{(error as Error)?.message}</p>;

  console.log(data);

  return <LinksList links={data} isLoading={isLoading} />;
};

export default Main;
