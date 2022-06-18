import { useMemo } from 'react';
import { Typography } from '@mui/material';
import { Comment as IComment } from 'types';
import { parseHtml } from 'utils/parseHtml';
import Media from '../../Media/Media';
import ContentHeader from '../../UI/ContentHeader';
import * as S from './Comment.styles';

interface CommentProps {
  comment: IComment;
}

const Comment = ({ comment }: CommentProps) => {
  const { body, user, date, media, responses } = comment;
  const parsedBody = useMemo(() => parseHtml(body), [body]);

  return (
    <>
      <S.CommentContainer>
        <ContentHeader user={user} date={date} />

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
      </S.CommentContainer>
      {responses && (
        <S.ResponsesListContainer>
          {responses.map((r) => (
            <Comment key={r.id} comment={r} />
          ))}
        </S.ResponsesListContainer>
      )}
    </>
  );
};

export default Comment;
