import { ReactEventHandler } from 'react';
import { SwipeableDrawer, useMediaQuery, useTheme } from '@mui/material';
import { Entry } from 'types';
import Loading from '../../UI/Loading';

import ErrorMessage from '../../UI/ErrorMessage';
import useEntry from '../../../hooks/api/useEntry';
import Comments from '../../Comments/Comments';
import * as S from './EntryCommentsDrawer.styles';

interface EntryCommentsDrawerProps {
  entry: Entry;
  onOpen: ReactEventHandler;
  onClose: ReactEventHandler;
  open: boolean;
}

const EntryCommentsDrawer = ({ entry, open, onOpen, onClose }: EntryCommentsDrawerProps) => {
  const { data, isLoading, error } = useEntry(entry.id, entry);
  const theme = useTheme();
  const isDekstop = useMediaQuery(theme.breakpoints.up('lg'));

  if (error) return <ErrorMessage error={error} />;

  return (
    <S.CommentsDrawer
      anchor={isDekstop ? 'right' : 'bottom'}
      open={open}
      onOpen={onOpen}
      onClose={onClose}
      style={{overflow: 'hidden'}}
    >
      <S.CommentsDrawerContainer>
        {/* <S.Puller /> */}
        <Comments comments={data?.comments} />
        {isLoading && <Loading />}
      </S.CommentsDrawerContainer>
    </S.CommentsDrawer>
  );
};

export default EntryCommentsDrawer;
