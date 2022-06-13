import { useParams } from 'react-router-dom';
import ContentList from 'components/ContentList/ContentList';
import ErrorMessage from 'components/UI/ErrorMessage';
import useTitle from 'hooks/useTitle';
import useTag from 'hooks/api/useTag';

const TAG_PAGE_LENGTH = 50;

const TagPage = () => {
  const { tag } = useParams();
  useTitle(`#${tag}`);
  const { data, isLoading, error, fetchNextPage, isFetchingNextPage } = useTag(tag!);

  const handleInititeScroll = () => {
    if (data?.pages[data.pages.length - 1].length === TAG_PAGE_LENGTH) {
      fetchNextPage();
    }
  };

  if (error) return <ErrorMessage error={error} />;

  return (
    <ContentList
      contents={data?.pages.flat()}
      isLoading={isLoading || isFetchingNextPage}
      onInfiniteScroll={handleInititeScroll}
    />
  );
};

export default TagPage;
