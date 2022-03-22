import { MenuItem, Select } from '@mui/material';
import { useState } from 'react';
import { EntryComment } from 'types/entry.types';
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

  return (
    <S.Container>
      <Select
        value={orderBy}
        onChange={(e) => setOrderBy(e.target.value as OrderKey)}
        variant='standard'
      >
        {Object.entries(COMMENTS_ORDER).map(([orderKey, { label }]) => (
          <MenuItem value={orderKey} key={orderKey}>
            {label}
          </MenuItem>
        ))}
      </Select>
      {comments.sort(COMMENTS_ORDER[orderBy].comparator).map((c) => (
        <Comment key={c.id} comment={c} />
      ))}
    </S.Container>
  );
};

export default Comments;
