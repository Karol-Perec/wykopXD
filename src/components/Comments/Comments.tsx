import { Chip, Divider } from '@mui/material';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Loading from '~/components/UI/Loading';
import useInfiniteScrolling from '~/hooks/useInfiniteScrolling';
import { Comment, CommentType } from '~/types';
import CommentView from './Comment/Comment';
import * as S from './Comments.styles';

type OrderKey = 'best' | 'oldest' | 'newest';

interface CommentOrder {
  label: string;
  comparator: (c1: Comment, c2: Comment) => number;
}

const COMMENTS_ORDER: Record<OrderKey, CommentOrder> = {
  best: {
    label: 'Najlepsze',
    comparator: (c1, c2) => c2.votes.up + c2.votes.down - c1.votes.up - c1.votes.down,
  },
  oldest: {
    label: 'Najstarsze',
    comparator: (c1, c2) => new Date(c1.created_at).getTime() - new Date(c2.created_at).getTime(),
  },
  newest: {
    label: 'Najnowsze',
    comparator: (c1, c2) => new Date(c2.created_at).getTime() - new Date(c1.created_at).getTime(),
  },
};

interface CommentsProps {
  comments?: Comment<CommentType>[];
}

const PAGE_SIZE = 10;

const Comments = ({ comments = [] }: CommentsProps) => {
  const { hash } = useLocation();
  const [orderBy, setOrderBy] = useState<OrderKey>('best');
  const [page, setPage] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  const infiniteScrollingTriggerRef = useInfiniteScrolling(false, () => setPage((p) => p + 1));

  const commentsList = useMemo(
    () =>
      comments
        .sort(COMMENTS_ORDER[orderBy].comparator)
        .slice(0, hash.includes('#comment') ? undefined : page * PAGE_SIZE - 1)
        .map((c) => <CommentView key={c.id} comment={c} />),
    [comments, orderBy, page, hash]
  );

  const handleSetOrderBy = (orderKey: OrderKey) => {
    setPage(1);
    setOrderBy(orderKey);
    containerRef.current?.scroll({ top: 0 });
  };

  useEffect(() => {
    if (comments.length && hash.includes('#comment-')) {
      document
        .getElementById(hash.slice(1))
        ?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [comments, hash]);

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

      <Divider />

      <div style={{ overflowY: 'auto' }} ref={containerRef}>
        {commentsList}
        {page * PAGE_SIZE <= comments.length && (
          <Loading containerRef={infiniteScrollingTriggerRef} />
        )}
      </div>
    </>
  );
};

export default Comments;
