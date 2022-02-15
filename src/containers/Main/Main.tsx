import LinksList from 'components/Links/LinksList/LinksList';
import usePromotedLinks from 'hooks/usePromotedLinks';

const Main = () => {
  const { data, isLoading, error, fetchNextPage } = usePromotedLinks();

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
