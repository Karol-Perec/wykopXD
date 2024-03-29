import EntryPreview from '~/components/Entries/Entry/EntryPreview';
import LinkPreview from '~/components/Links/Link/LinkPreview';
import Loading from '~/components/UI/Loading';
import useInfiniteScrolling, { getInfiniteScrollingTriggerIdx } from '~/hooks/useInfiniteScrolling';
import { Entry, Link } from '~/types';
import { MainContentContainer } from '../UI/Containers';

interface MultiListProps {
  contents?: (Link | Entry)[];
  isLoading: boolean;
  onInfiniteScroll: () => void;
}

const isLink = (content: Entry | Link): content is Link => 'title' in content;

const ContentList = ({ contents, isLoading, onInfiniteScroll }: MultiListProps) => {
  const infiniteScrollingTriggerRef = useInfiniteScrolling(isLoading, onInfiniteScroll);

  return (
    <MainContentContainer>
      {contents?.map((content, idx) =>
        isLink(content) ? (
          <LinkPreview
            link={content}
            key={content.id}
            containerRef={idx > getInfiniteScrollingTriggerIdx(contents) ? infiniteScrollingTriggerRef : undefined}
          />
        ) : (
          <EntryPreview
            entry={content}
            key={content.id}
            containerRef={idx > getInfiniteScrollingTriggerIdx(contents) ? infiniteScrollingTriggerRef : undefined}
          />
        )
      )}
      {isLoading && <Loading />}
    </MainContentContainer>
  );
};

export default ContentList;
