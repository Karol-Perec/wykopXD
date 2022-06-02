import { useMemo } from 'react';
import { Tooltip, Typography } from '@mui/material';
import { EntryComment } from 'types';
import { calculateAprroximatedAge } from 'utils/dateUtils';
import { parseHtml } from 'utils/parseHtml';
import { RouterNoPropagationLink } from 'components/UI/CustomLinks';
import Avatar from 'components/UI/Avatar';
import * as S from './Comment.styles';

interface CommentProps {
  comment: EntryComment;
}

const Comment = ({ comment }: CommentProps) => {
  const { body, user, date } = comment;
  const parsedBody = useMemo(() => parseHtml(body), [body]);

  return (
    <div>
      <S.CommentHeader>
        <RouterNoPropagationLink to={`/ludzie/${user.login}`}>
          <Avatar src={user.avatarUrl} size={30} />
        </RouterNoPropagationLink>
        <S.CommentHeaderMeta>
          <RouterNoPropagationLink to={`/ludzie/${user.login}`}>
            <Typography variant='subtitle1'>{user.login}</Typography>
          </RouterNoPropagationLink>
          <Tooltip title={date}>
            <Typography variant='caption'>{calculateAprroximatedAge(date)}</Typography>
          </Tooltip>
        </S.CommentHeaderMeta>
      </S.CommentHeader>
      <Typography>{parsedBody}</Typography>
    </div>
  );
};

export default Comment;
