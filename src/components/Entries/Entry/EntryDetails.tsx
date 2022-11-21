import {
  ModeCommentOutlined as CommentsIcon,
  AddBox as PlusIcon,
  Share as ShareIcon,
} from '@mui/icons-material';
import { Typography, Button, Divider, IconButton } from '@mui/material';
import { useMemo } from 'react';
import Comments from '~/components/Comments/Comments';
import Media from '~/components/Media/Media';
import SurveyResults from '~/components/SurveyResults/SurveyResults';
import {
  Card,
  ContentContainer,
  MainContentContainer,
  TextContainer,
} from '~/components/UI/Containers';
import UserHeader from '~/components/UI/UserHeader';
import { Entry } from '~/types';
import { parseHtml } from '~/utils/parseHtml';
import * as S from './Entry.styles';

interface EntryDetailsProps {
  data: Entry;
  isUpdatingComments?: boolean;
}

const EntryDetails = ({ data, isUpdatingComments = false }: EntryDetailsProps) => {
  const { media, user, body, id, date, commentsCount, voteCountPlus, comments, survey } = data;
  const parsedBody = useMemo(() => parseHtml(body), [body]);

  const handleShare = () => {
    navigator.share({ url: `${window.location.origin}/wpis/${id}` }).catch(() => undefined);
  };

  return (
    <MainContentContainer>
      <Card>
        <UserHeader user={user} date={date} />

        <ContentContainer>
          <TextContainer>{parsedBody}</TextContainer>
          {media && (
            <Media
              sourceUrl={media.url}
              imageUrl={media.previewUrl}
              type={media.type}
              plus18={media.plus18}
              ratio={media.ratio}
            />
          )}
          {survey && <SurveyResults survey={survey} />}
        </ContentContainer>

        <Divider variant='middle' />

        <S.Statistics>
          <Button startIcon={<PlusIcon />} color='inherit'>
            <Typography>{voteCountPlus}</Typography>
          </Button>

          <Button startIcon={<CommentsIcon />} color='inherit'>
            <Typography>{commentsCount}</Typography>
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
