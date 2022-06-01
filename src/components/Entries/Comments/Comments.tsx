import { Button, MenuItem, Select } from '@mui/material';
import { useState } from 'react';
import { EntryComment } from 'types';
import { stopPropagation, stopPropagationHandler } from 'utils/windowUtils';
import Comment from './Comment/Comment';
import * as S from './Comments.styles';

type OrderKey = 'NEWEST' | 'OLDEST' | 'BEST';

interface CommentOrder {
  label: string;
  comparator: (c1: EntryComment, c2: EntryComment) => number;
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
  comments: EntryComment[];
}

const Comments = ({ comments }: CommentsProps) => {
  const [orderBy, setOrderBy] = useState<OrderKey>('OLDEST');
  const [page, setPage] = useState(1);

  const handleLoadMore = stopPropagation(() => {
    setPage((p) => (p * 10 < comments.length ? p + 1 : p));
  });

  return (
    <S.Container>
      <Select
        value={orderBy}
        onChange={(e) => setOrderBy(e.target.value as OrderKey)}
        variant='standard'
      >
        {Object.entries(COMMENTS_ORDER).map(([orderKey, { label }]) => (
          <MenuItem value={orderKey} key={orderKey} onClick={stopPropagationHandler}>
            {label}
          </MenuItem>
        ))}
      </Select>
      {comments
        .sort(COMMENTS_ORDER[orderBy].comparator)
        .slice(0, page * 10 - 1)
        .map((c) => (
          <Comment key={c.id} comment={c} />
        ))}
      {page * 10 <= comments.length && (
        <Button onClick={handleLoadMore}>Load moar</Button>
      )}
    </S.Container>
  );
};

export default Comments;
