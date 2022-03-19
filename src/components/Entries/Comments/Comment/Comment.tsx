import { Avatar, Typography } from '@mui/material';
import { EntryComment } from '../../../../types';
import { calculateAprroximatedAge } from '../../../../utils/dateUtils';
import { parseHtml } from '../../../../utils/parseHtml';

interface CommentProps {
  comment: EntryComment;
}

const Comment = ({ comment }: CommentProps) => {
  const { id, body, user, date, voteCountPlus } = comment;

  return (
    <div>
      <Avatar alt={user.login} src={user.avatarUrl} variant='rounded' />
      <Typography variant='subtitle1'>{user.login}</Typography>
      <Typography variant='caption'>{calculateAprroximatedAge(date)}</Typography>
      <Typography>{parseHtml(body)}</Typography>
    </div>
  );
};

export default Comment;
