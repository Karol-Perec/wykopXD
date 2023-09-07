import {
  ModeCommentOutlined as CommentsIcon,
  ThumbUpOutlined as ThumbUpIcon,
  Share as ShareIcon,
} from '@mui/icons-material';
import { Typography, Button, Divider, IconButton } from '@mui/material';
import { useMemo } from 'react';
import Comments from '~/components/Comments/Comments';
import Media from '~/components/Media/Media';
import SurveyResults from '~/components/SurveyResults/SurveyResults';
import { Card, ContentContainer, MainContentContainer, TextContainer } from '~/components/UI/Containers';
import UserHeader from '~/components/UI/UserHeader';
import { Entry } from '~/types';
import { parseMarkdown } from '~/utils/parseMarkdown';
import * as S from './Entry.styles';

interface EntryDetailsProps {
  entry: Entry;
  isUpdatingComments?: boolean;
}

const EntryDetails = ({ entry, isUpdatingComments = false }: EntryDetailsProps) => {
  const { media, author, content, id, votes, created_at: createdAt, comments, adult } = entry;
  const parsedContent = useMemo(() => parseMarkdown(content), [content]);

  const handleShare = () => navigator.share({ url: `${window.location.origin}/wpis/${id}` });

  return (
    <MainContentContainer>
      <Card>
        <UserHeader user={author} date={createdAt} />

        <ContentContainer>
          <TextContainer>{parsedContent}</TextContainer>
          {media.photo && (
            <Media
              sourceUrl={media.photo.url}
              imageUrl={media.photo.url}
              type=''
              adult={adult}
              ratio={media.photo.width / media.photo.height}
              listMode
            />
          )}
          {/* {survey && <SurveyResults survey={survey} />} */}
        </ContentContainer>

        <Divider variant='middle' />

        <S.Statistics>
          <Button startIcon={<ThumbUpIcon />} color='inherit'>
            <Typography>{votes.up}</Typography>
          </Button>

          <Button startIcon={<CommentsIcon />} color='inherit'>
            <Typography>{comments.count}</Typography>
          </Button>

          {!!navigator.share && (
            <IconButton onClick={handleShare} size='small'>
              <ShareIcon fontSize='small' />
            </IconButton>
          )}
        </S.Statistics>

        {!isUpdatingComments && (
          <>
            <Divider variant='middle' />
            <Comments comments={comments} />
          </>
        )}
      </Card>
    </MainContentContainer>
  );
};

export default EntryDetails;
