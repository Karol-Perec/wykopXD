import useInfiniteScrolling from 'hooks/useInfiniteScrolling';
import { Entry, Link } from 'types';
import EntryDetails from '../Entries/EntryDetails/EntryDetails';
import LinkDetails from '../Links/LinkDetails/LinkDetails';
import Loading from '../UI/Loading';

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
        const ContentComponent = isLink(content) ? LinkDetails : EntryDetails;
        return (
          <ContentComponent
            data={content as any}
            key={content.id}
            listMode
            containerRef={idx + 2 === contents.length ? infiniteScrollingTriggerRef : undefined}
          />
        );
      })}
      {isLoading && <Loading />}
    </>
  );
};

export default ContentList;
