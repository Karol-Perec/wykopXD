import { useMemo, useState } from 'react';
import { Button, Chip, Divider } from '@mui/material';
import { Comment, ExtendedComment } from 'types';
import { stopPropagation } from 'utils/windowUtils';
import CommentView from './CommentView/CommentView';
import * as S from './Comments.styles';

type OrderKey = 'best' | 'oldest' | 'newest';

interface CommentOrder {
  label: string;
  comparator: (c1: Comment, c2: Comment) => number;
}

const COMMENTS_ORDER: Record<OrderKey, CommentOrder> = {
  best: {
    label: 'Najlepsze',
    comparator: (c1, c2) => c2.voteCountPlus - c1.voteCountPlus,
  },
  oldest: {
    label: 'Najstarsze',
    comparator: (c1, c2) => new Date(c1.date).getTime() - new Date(c2.date).getTime(),
  },
  newest: {
    label: 'Najnowsze',
    comparator: (c1, c2) => new Date(c2.date).getTime() - new Date(c1.date).getTime(),
  },
};

interface CommentsProps {
  comments: Comment[] | ExtendedComment[];
}

const Comments = ({ comments }: CommentsProps) => {
  const [orderBy, setOrderBy] = useState<OrderKey>('best');
  const [page, setPage] = useState(1);

  const commentsList = useMemo(
    () =>
      comments
        .sort(COMMENTS_ORDER[orderBy].comparator)
        .slice(0, page * 20 - 1)
        .map((c) => <CommentView key={c.id} comment={c} />),
    [comments, orderBy, page]
  );

  const handleLoadMore = stopPropagation(() =>
    setPage((p) => (p * 20 < comments.length ? p + 1 : p))
  );

  return (
    <>
      <Divider variant='middle' />
      <S.SortingContainer>
        {Object.entries(COMMENTS_ORDER).map(([orderKey, { label }]) => (
          <Chip
            variant={orderBy === orderKey ? 'filled' : 'outlined'}
            color={orderBy === orderKey ? 'primary' : 'default'}
            label={label}
            size='small'
            onClick={() => setOrderBy(orderKey as OrderKey)}
          />
        ))}
      </S.SortingContainer>
      <S.CommentsListContainer>
        {commentsList}
        {page * 20 <= comments.length && <Button onClick={handleLoadMore}>Załaduj więcej</Button>}
      </S.CommentsListContainer>
    </>
  );
};

export default Comments;
