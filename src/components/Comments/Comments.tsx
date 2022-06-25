import { useMemo, useState } from 'react';
import { Chip, Divider } from '@mui/material';
import useInfiniteScrolling from 'hooks/useInfiniteScrolling';
import { Comment, ExtendedComment } from 'types';
import CommentView from './Comment/Comment';
import Loading from '../UI/Loading';
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
  comments?: Comment[] | ExtendedComment[];
}

const Comments = ({ comments = [] }: CommentsProps) => {
  const [orderBy, setOrderBy] = useState<OrderKey>('best');
  const [page, setPage] = useState(1);

  const infiniteScrollingTriggerRef = useInfiniteScrolling(false, () => setPage((p) => p + 1));

  const commentsList = useMemo(
    () =>
      comments
        .sort(COMMENTS_ORDER[orderBy].comparator)
        .slice(0, page * 10 - 1)
        .map((c) => <CommentView key={c.id} comment={c} />),
    [comments, orderBy, page]
  );

  const handleSetOrderBy = (orderKey: OrderKey) => {
    setPage(1);
    setOrderBy(orderKey);
  };

  return (
    <>
      <S.SortingContainer>
        {Object.entries(COMMENTS_ORDER).map(([orderKey, { label }]) => (
          <Chip
            variant={orderBy === orderKey ? 'filled' : 'outlined'}
            color={orderBy === orderKey ? 'primary' : 'default'}
            label={label}
            size='small'
            onClick={() => handleSetOrderBy(orderKey as OrderKey)}
            key={orderKey}
          />
        ))}
      </S.SortingContainer>
      {commentsList}
      {page * 10 <= comments.length && <Loading containerRef={infiniteScrollingTriggerRef} />}
    </>
  );
};

export default Comments;
