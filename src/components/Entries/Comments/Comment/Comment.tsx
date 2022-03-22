import { Tooltip, Typography } from '@mui/material';
import { EntryComment } from 'types/entry.types';
import { calculateAprroximatedAge } from 'utils/dateUtils';
import { parseHtml } from 'utils/parseHtml';
import { RouterNoPropagationLink } from 'components/UI/CustomLinks';
import * as S from './Comment.styles';

interface CommentProps {
  comment: EntryComment;
}

const Comment = ({ comment }: CommentProps) => {
  const { id, body, user, date, voteCountPlus } = comment;

  return (
    <div>
      <RouterNoPropagationLink to={`/ludzie/${user.login}`}>
        <S.AuthorAvatar alt={user.login} src={user.avatarUrl} variant='rounded' />
      </RouterNoPropagationLink>
      <RouterNoPropagationLink to={`/ludzie/${user.login}`}>
        <Typography>{user.login}</Typography>
      </RouterNoPropagationLink>
      <Tooltip title={date}>
        <Typography variant='caption'>{calculateAprroximatedAge(date)}</Typography>
      </Tooltip>
      <Typography>{parseHtml(body)}</Typography>
    </div>
  );
};

export default Comment;
