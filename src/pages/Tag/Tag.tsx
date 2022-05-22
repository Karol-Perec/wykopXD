import EntriesList from 'components/Entries/EntriesList/EntriesList';
import ErrorMessage from 'components/UI/ErrorMessage';
import { useParams } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import useTag from '../../hooks/api/useTag';

const Tag = () => {
  const { tag } = useParams();
  useTitle(`#${tag}`);
  const { data, isLoading, error, fetchNextPage, isFetchingNextPage } = useTag(tag!);

  if (error) return <ErrorMessage error={error} />;

  return (
    <EntriesList
      entries={data?.pages.flat()}
      isLoading={isLoading || isFetchingNextPage}
      onInfiniteScroll={fetchNextPage}
    />
  );
};

export default Tag;
