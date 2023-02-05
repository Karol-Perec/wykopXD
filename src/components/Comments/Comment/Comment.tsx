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
import { parseMarkdown } from '~/utils/parseMarkdown';
import { handleStopPropagation } from '~/utils/windowUtils';
import * as S from './Comment.styles';

interface CommentProps {
  comment: IComment;
  isResponse?: boolean;
}

const Comment = ({ comment, isResponse }: CommentProps) => {
  const { id, author, comments, votes, created_at: createdAt, content, media, adult } = comment;
  const parsedContent = useMemo(() => parseMarkdown(content), [content]);

  return (
    <>
      <S.CommentContainer id={`comment-${id}`}>
        <UserHeader user={author} date={createdAt} />

        <ContentContainer>
          <TextContainer>{parsedContent}</TextContainer>
          {media.photo && (
            <S.CommentMediaContainer onClick={handleStopPropagation} doAddMargin={isResponse}>
              <Media
                sourceUrl={media.photo.url}
                imageUrl={media.photo.url}
                type=''
                plus18={adult}
                ratio={media.photo.width / media.photo.height}
              />
            </S.CommentMediaContainer>
          )}
        </ContentContainer>

        <S.Statistics>
          <Button startIcon={<ThumbUpIcon />} color='inherit'>
            <Typography>{votes.up}</Typography>
          </Button>
          <Button startIcon={<ThumbDownIcon />} color='inherit'>
            <Typography>{votes.down}</Typography>
          </Button>
        </S.Statistics>
      </S.CommentContainer>

      <Divider variant='middle' />

      {comments?.items && (
        <S.ResponsesListContainer>
          {comments.items.map((r) => (
            <Comment key={r.id} comment={r} isResponse />
          ))}
        </S.ResponsesListContainer>
      )}
    </>
  );
};

export default Comment;
