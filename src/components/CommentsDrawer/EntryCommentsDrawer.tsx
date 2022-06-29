import { ReactEventHandler } from 'react';
import { Entry } from 'types';
import useEntry from 'hooks/api/useEntry';
import CommentsDrawer from './CommentsDrawer';

interface EntryCommentsDrawerProps {
  entry: Entry;
  onOpen: ReactEventHandler;
  onClose: ReactEventHandler;
  open: boolean;
}

const EntryCommentsDrawer = ({ entry, open, onOpen, onClose }: EntryCommentsDrawerProps) => {
  const { data, isLoading, error } = useEntry(entry.id, entry);

  return (
    <CommentsDrawer
      comments={data?.comments}
      isLoading={isLoading}
      error={error}
      open={open}
      onOpen={onOpen}
      onClose={onClose}
    />
  );
};

export default EntryCommentsDrawer;
