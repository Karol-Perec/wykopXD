import { useMemo, useState } from 'react';
import { Button, Divider, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { Comment, ExtendedComment } from 'types';
import { stopPropagation, handleStopPropagation } from 'utils/windowUtils';
import CommentView from './CommentView/CommentView';
import * as S from './Comments.styles';

type OrderKey = 'NEWEST' | 'OLDEST' | 'BEST';

interface CommentOrder {
  label: string;
  comparator: (c1: Comment, c2: Comment) => number;
}

const COMMENTS_ORDER: Record<OrderKey, CommentOrder> = {
  OLDEST: {
    label: 'Najstarsze',
    comparator: (c1, c2) => new Date(c1.date).getTime() - new Date(c2.date).getTime(),
  },
  NEWEST: {
    label: 'Najnowsze',
    comparator: (c1, c2) => new Date(c2.date).getTime() - new Date(c1.date).getTime(),
  },
  BEST: {
    label: 'Najlepsze',
    comparator: (c1, c2) => c2.voteCountPlus - c1.voteCountPlus,
  },
};

interface CommentsProps {
  comments: Comment[] | ExtendedComment[];
}

const Comments = ({ comments }: CommentsProps) => {
  const [orderBy, setOrderBy] = useState<OrderKey>('OLDEST');
  const [page, setPage] = useState(1);

  const commentsList = useMemo(
    () =>
      comments
        .sort(COMMENTS_ORDER[orderBy].comparator)
        .slice(0, page * 20 - 1)
        .map((c) => <CommentView key={c.id} comment={c} />),
    [comments, orderBy, page]
  );

  const handleSelectOrderBy = (e: SelectChangeEvent<OrderKey>) => {
    setOrderBy(e.target.value as OrderKey);
  };

  const handleLoadMore = stopPropagation(() =>
    setPage((p) => (p * 20 < comments.length ? p + 1 : p))
  );

  return (
    <>
      <Divider variant='middle' />
      <S.CommentsListContainer>
        <Select value={orderBy} onChange={handleSelectOrderBy} variant='standard'>
          {Object.entries(COMMENTS_ORDER).map(([orderKey, { label }]) => (
            <MenuItem value={orderKey} key={orderKey} onClick={handleStopPropagation}>
              {label}
            </MenuItem>
          ))}
        </Select>
        {commentsList}
        {page * 20 <= comments.length && <Button onClick={handleLoadMore}>Załaduj więcej</Button>}
      </S.CommentsListContainer>
    </>
  );
};

export default Comments;
