import { Divider } from '@mui/material';
import { useMemo } from 'react';
import Media from 'components/Media/Media';
import { ContentContainer, TextContentContainer } from 'components/UI/Containers';
import UserHeader from 'components/UI/UserHeader';
import { Comment as IComment } from 'types';
import { parseHtml } from 'utils/parseHtml';
import { handleStopPropagation } from 'utils/windowUtils';
import * as S from './Comment.styles';

interface CommentProps {
  comment: IComment;
}

const Comment = ({ comment }: CommentProps) => {
  const { id, body, user, date, media, responses } = comment;
  const parsedBody = useMemo(() => parseHtml(body), [body]);

  return (
    <>
      <S.CommentContainer id={`comment-${id}`}>
        <Divider variant='middle' />
        <UserHeader user={user} date={date} />

        <ContentContainer>
          <TextContentContainer>{parsedBody}</TextContentContainer>
          {media && (
            // eslint-disable-next-line jsx-a11y/no-static-element-interactions
            <div onClick={handleStopPropagation}>
              <Media
                sourceUrl={media.url}
                imageUrl={media.previewUrl}
                type={media.type}
                plus18={media.plus18}
                ratio={media.ratio}
                listMode={false}
              />
            </div>
          )}
        </ContentContainer>
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
