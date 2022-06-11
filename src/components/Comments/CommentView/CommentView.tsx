import { useMemo } from 'react';
import { Tooltip, Typography } from '@mui/material';
import { Comment } from 'types';
import { calculateAprroximatedAge } from 'utils/dateUtils';
import { parseHtml } from 'utils/parseHtml';
import { RouterNoPropagationLink } from 'components/UI/CustomLinks';
import Avatar from 'components/UI/Avatar';
import { USER_COLOR } from 'constants/userColor.constat';
import { TEXT_SEPARATOR } from 'constants/texts.constant';
import * as S from './CommentView.styles';
import Media from '../../Media/Media';

interface CommentProps {
  comment: Comment;
}

const CommentView = ({ comment }: CommentProps) => {
  const { body, user, date, media } = comment;
  const parsedBody = useMemo(() => parseHtml(body), [body]);

  return (
    <div>
      <S.CommentHeader>
        <RouterNoPropagationLink to={`/ludzie/${user.login}`}>
          <Avatar src={user.avatarUrl} size={24} />
        </RouterNoPropagationLink>

        <RouterNoPropagationLink to={`/ludzie/${user.login}`}>
          <Typography variant='subtitle2' component='span' color={USER_COLOR[user.status]}>
            {user.login}
          </Typography>
        </RouterNoPropagationLink>

        <Typography variant='subtitle2' component='span'>
          {TEXT_SEPARATOR}
        </Typography>

        <Tooltip title={date}>
          <Typography variant='caption' component='span'>
            {calculateAprroximatedAge(date)}
          </Typography>
        </Tooltip>
      </S.CommentHeader>

      <Typography>{parsedBody}</Typography>

      {media && (
        <Media
          sourceUrl={media.url}
          imageUrl={media.previewUrl}
          type={media.type}
          plus18={media.plus18}
          ratio={media.ratio}
          listMode={false}
        />
      )}
    </div>
  );
};

export default CommentView;
