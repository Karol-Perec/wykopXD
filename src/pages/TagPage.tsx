import { Container } from '@mui/material';
import { useParams } from 'react-router-dom';
import useTag from '~/api/tags/useTag';
import ContentList from '~/components/ContentList/ContentList';
import ErrorMessage from '~/components/UI/ErrorMessage';
import useTitle from '~/hooks/useTitle';
import { filterUniqueData } from '~/utils/dataUtils';

const TagPage = () => {
  const { tag } = useParams();
  useTitle(`#${tag}`);
  const { data, isLoading, fetchNextPage, isFetchingNextPage, error } = useTag(tag!);
  const meta = data?.pages[0].meta;

  const handleInititeScroll = () => {
    if (!data || data.pages?.at(-1)?.items.length) {
      fetchNextPage();
    }
  };

  if (error) return <ErrorMessage error={error} />;

  return (
    <>
      <Container disableGutters>
        {meta?.backgroundUrl && <img src={meta.backgroundUrl} width='100%' alt={tag} />}
      </Container>

      <ContentList
        contents={filterUniqueData(data?.pages.flatMap((p) => p.items))}
        isLoading={isLoading || isFetchingNextPage}
        onInfiniteScroll={handleInititeScroll}
      />
    </>
  );
};

export default TagPage;
