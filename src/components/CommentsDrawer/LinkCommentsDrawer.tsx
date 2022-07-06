import { ReactEventHandler, useEffect, useState } from 'react';
import { Link } from 'types';
import useLink from 'hooks/api/useLink';
import CommentsDrawer from './CommentsDrawer';

interface LinkCommentsDrawerProps {
  link: Link;
  onOpen: ReactEventHandler;
  onClose: ReactEventHandler;
  open: boolean;
}

const LinkCommentsDrawer = ({ link, open, onOpen, onClose }: LinkCommentsDrawerProps) => {
  const [wasOpened, setWasOpened] = useState(open);
  const { data, isLoading, error } = useLink(link.id, link, wasOpened);

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

export default LinkCommentsDrawer;
