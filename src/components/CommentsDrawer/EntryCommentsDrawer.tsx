import { ReactEventHandler, useEffect, useState } from 'react';
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
  const [wasOpened, setWasOpened] = useState(false);
  const { data, isLoading, error } = useEntry(entry.id, entry, wasOpened);

  useEffect(() => {
    if (open) setWasOpened(true);
  }, [open]);

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
