import { ReactEventHandler } from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import { Comment, ExtendedComment } from 'types';
import { handleStopPropagation } from 'utils/windowUtils';
import Loading from 'components/UI/Loading';
import ErrorMessage from 'components/UI/ErrorMessage';
import Comments from 'components/Comments/Comments';
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
      keepMounted={false}
    >
      {!isDekstop && <S.Puller />}
      <div style={{width: '100%', overflowY: 'scroll'}}>
        <Comments comments={comments} />
        {isLoading && <Loading />}
      </div>
    </S.CommentsDrawer>
  );
};

export default CommentsDrawer;
