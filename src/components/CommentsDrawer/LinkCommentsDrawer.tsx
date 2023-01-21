import { ReactEventHandler, useEffect, useState } from 'react';
import useLinkComments from '~/hooks/api/useLinkComments';
import CommentsDrawer from './CommentsDrawer';

interface LinkCommentsDrawerProps {
  linkId: number;
  onOpen: ReactEventHandler;
  onClose: ReactEventHandler;
  open: boolean;
}

const LinkCommentsDrawer = ({ linkId, open, onOpen, onClose }: LinkCommentsDrawerProps) => {
  const [wasOpened, setWasOpened] = useState(open);
  const { data, isLoading, error } = useLinkComments(linkId, 'best', wasOpened);

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

export default LinkCommentsDrawer;
