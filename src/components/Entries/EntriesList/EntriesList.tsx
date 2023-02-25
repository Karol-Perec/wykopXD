import { MainContentContainer } from '~/components/UI/Containers';
import Loading from '~/components/UI/Loading';
import useInfiniteScrolling, { getInfiniteScrollingTriggerIdx } from '~/hooks/useInfiniteScrolling';
import { Entry } from '~/types';
import EntryPreview from '../Entry/EntryPreview';

interface EntriesListProps {
  entries?: Entry[];
  isLoading: boolean;
  onInfiniteScroll: () => void;
}

const EntriesList = ({ entries, isLoading, onInfiniteScroll }: EntriesListProps) => {
  const infiniteScrollingTriggerRef = useInfiniteScrolling(isLoading, onInfiniteScroll);

  return (
    <MainContentContainer>
      {entries?.map((entry, idx) => (
        <EntryPreview
          entry={entry}
          key={entry.id}
          containerRef={
            idx > getInfiniteScrollingTriggerIdx(entries) ? infiniteScrollingTriggerRef : undefined
          }
        />
      ))}
      {isLoading && <Loading />}
    </MainContentContainer>
  );
};

export default EntriesList;
