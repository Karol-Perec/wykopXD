import { ReactEventHandler, useEffect, useState } from 'react';
import useEntryComments from '~/hooks/api/useEntryComments';
import { Entry } from '~/types';
import CommentsDrawer from './CommentsDrawer';

interface EntryCommentsDrawerProps {
  entry: Entry;
  onOpen: ReactEventHandler;
  onClose: ReactEventHandler;
  open: boolean;
}

const EntryCommentsDrawer = ({ entry, open, onOpen, onClose }: EntryCommentsDrawerProps) => {
  const [wasOpened, setWasOpened] = useState(false);
  const { data, isLoading, error } = useEntryComments(entry, 'best', wasOpened);

  useEffect(() => {
    if (open) setWasOpened(true);
  }, [open]);

  return (
    <CommentsDrawer
      comments={data?.pages.map((p) => p.data).flat()}
      isLoading={isLoading}
      error={error}
      open={open}
      onOpen={onOpen}
      onClose={onClose}
    />
  );
};

export default EntryCommentsDrawer;
