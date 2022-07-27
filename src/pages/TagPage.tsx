import { useParams } from 'react-router-dom';
import ContentList from 'components/ContentList/ContentList';
import useTag from 'hooks/api/useTag';
import useTitle from 'hooks/useTitle';

const TagPage = () => {
  const { tag } = useParams();
  useTitle(`#${tag}`);
  const { data, isLoading, fetchNextPage, isFetchingNextPage } = useTag(tag!);

  const handleInititeScroll = () => {
    if (!data || data.pages?.at(-1)?.items.length) {
      fetchNextPage();
    }
  };

  return (
    <ContentList
      contents={data?.pages.flatMap((p) => p.items)}
      isLoading={isLoading || isFetchingNextPage}
      onInfiniteScroll={handleInititeScroll}
    />
  );
};

export default TagPage;
