import EntryPreview from '~/components/Entries/Entry/EntryPreview';
import LinkPreview from '~/components/Links/Link/LinkPreview';
import Loading from '~/components/UI/Loading';
import useInfiniteScrolling from '~/hooks/useInfiniteScrolling';
import { Entry, Link } from '~/types';

interface MultiListProps {
  contents?: (Link | Entry)[];
  isLoading: boolean;
  onInfiniteScroll: () => void;
}

const isLink = (content: Entry | Link): content is Link => !!(content as Link).title;

const ContentList = ({ contents, isLoading, onInfiniteScroll }: MultiListProps) => {
  const infiniteScrollingTriggerRef = useInfiniteScrolling(isLoading, onInfiniteScroll);

  return (
    <>
      {contents?.map((content, idx) => {
        const ContentComponent = isLink(content) ? LinkPreview : EntryPreview;
        return (
          <ContentComponent
            data={content as any}
            key={content.id}
            containerRef={idx + 2 === contents.length ? infiniteScrollingTriggerRef : undefined}
          />
        );
      })}
      {isLoading && <Loading />}
    </>
  );
};

export default ContentList;
