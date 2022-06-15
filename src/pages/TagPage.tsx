import { useParams } from 'react-router-dom';
import ContentList from 'components/ContentList/ContentList';
import ErrorMessage from 'components/UI/ErrorMessage';
import useTitle from 'hooks/useTitle';
import useTag from 'hooks/api/useTag';

const TagPage = () => {
  const { tag } = useParams();
  useTitle(`#${tag}`);
  const { data, isLoading, error, fetchNextPage, isFetchingNextPage } = useTag(tag!);

  const handleInititeScroll = () => {
    if (!data || data.pages?.at(-1)?.items.length) {
      fetchNextPage();
    }
  };

  if (error) return <ErrorMessage error={error} />;

  return (
    <ContentList
      contents={data?.pages.flatMap((p) => p.items)}
      isLoading={isLoading || isFetchingNextPage}
      onInfiniteScroll={handleInititeScroll}
    />
  );
};

export default TagPage;
