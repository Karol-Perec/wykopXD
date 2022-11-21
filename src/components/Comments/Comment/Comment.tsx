import {
  ThumbUpOutlined as ThumbUpIcon,
  ThumbDownOutlined as ThumbDownIcon,
} from '@mui/icons-material';
import { Button, Divider, Typography } from '@mui/material';
import { useMemo } from 'react';
import Media from '~/components/Media/Media';
import { ContentContainer, TextContainer } from '~/components/UI/Containers';
import UserHeader from '~/components/UI/UserHeader';
import { Comment as IComment } from '~/types';
import { parseHtml } from '~/utils/parseHtml';
import { handleStopPropagation } from '~/utils/windowUtils';
import * as S from './Comment.styles';

interface CommentProps {
  comment: IComment;
  isResponse?: boolean;
}

const Comment = ({ comment, isResponse }: CommentProps) => {
  const { id, body, user, date, media, responses, voteCountMinus, voteCountPlus } = comment;
  const parsedBody = useMemo(() => parseHtml(body), [body]);

  return (
    <>
      <S.CommentContainer id={`comment-${id}`}>
        <UserHeader user={user} date={date} />

        <ContentContainer>
          <TextContainer>{parsedBody}</TextContainer>
          {media && (
            // eslint-disable-next-line jsx-a11y/no-static-element-interactions
            <S.CommentMediaContainer onClick={handleStopPropagation} doAddMargin={isResponse}>
              <Media
                sourceUrl={media.url}
                imageUrl={media.previewUrl}
                type={media.type}
                plus18={media.plus18}
                ratio={media.ratio}
                listMode={false}
              />
            </S.CommentMediaContainer>
          )}
        </ContentContainer>
        <S.Statistics>
          <Button startIcon={<ThumbUpIcon />} color='inherit'>
            <Typography>{voteCountPlus}</Typography>
          </Button>

          {voteCountMinus !== undefined && (
            <Button startIcon={<ThumbDownIcon />} color='inherit'>
              <Typography>{voteCountMinus}</Typography>
            </Button>
          )}
        </S.Statistics>
      </S.CommentContainer>
      <Divider variant='middle' />
      {responses && (
        <S.ResponsesListContainer>
          {responses.map((r) => (
            <Comment key={r.id} comment={r} isResponse/>
          ))}
        </S.ResponsesListContainer>
      )}
    </>
  );
};

export default Comment;
