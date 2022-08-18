import { useMediaQuery, useTheme } from '@mui/material';
import { ReactEventHandler } from 'react';
import Comments from '~/components/Comments/Comments';
import ErrorMessage from '~/components/UI/ErrorMessage';
import Loading from '~/components/UI/Loading';
import { Comment, ExtendedComment } from '~/types';
import { handleStopPropagation } from '~/utils/windowUtils';
import * as S from './CommentsDrawer.styles';

interface CommentsDrawerProps {
  comments?: Comment[] | ExtendedComment[];
  isLoading: boolean;
  error: unknown;
  onOpen: ReactEventHandler;
  onClose: ReactEventHandler;
  open: boolean;
}

const CommentsDrawer = ({
  comments,
  isLoading,
  error,
  open,
  onOpen,
  onClose,
}: CommentsDrawerProps) => {
  const theme = useTheme();
  const isDekstop = useMediaQuery(theme.breakpoints.up('md'));

  if (error) return <ErrorMessage error={error} />;

  return (
    <S.CommentsDrawer
      anchor={isDekstop ? 'right' : 'bottom'}
      open={open}
      onOpen={onOpen}
      onClose={onClose}
      onClick={handleStopPropagation}
      onMouseUp={handleStopPropagation}
      keepMounted={false}
    >
      {!isDekstop && <S.Puller />}
      <div style={{ overflowY: 'auto'}}>
        <Comments comments={comments} />
        {isLoading && <Loading />}
      </div>
    </S.CommentsDrawer>
  );
};

export default CommentsDrawer;
