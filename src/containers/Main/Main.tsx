import { useState } from 'react';
import LinksList from 'components/Links/LinksList/LinksList';
import usePromotedLinks from 'hooks/usePromotedLinks';

const Main = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, error, fetchNextPage } = usePromotedLinks(page);

  if (error) return <p>{(error as Error)?.message}</p>;

  console.log(data);

  return (
    <>
      <button type='button' onClick={() => fetchNextPage()}>
        xD
      </button>
      <LinksList links={data?.pages.flat()} isLoading={isLoading} />
    </>
  );
};

export default Main;
