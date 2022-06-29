import { RefCallback, useMemo, useState } from 'react';
import {
  Message as CommentsIcon,
  AddBox as PlusIcon,
  Share as ShareIcon,
} from '@mui/icons-material';
import { Typography, Button, Divider, IconButton } from '@mui/material';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import Media from 'components/Media/Media';
import { Entry } from 'types';
import { parseHtml } from 'utils/parseHtml';
import { openInNewTab, stopPropagation, handleStopPropagation } from 'utils/windowUtils';
import SurveyResults from '../../SurveyResults/SurveyResults';
import Comments from '../../Comments/Comments';
import { Card, ContentContainer, TextContentContainer } from '../../UI/Containers';
import UserHeader from '../../UI/UserHeader';
import * as S from './EntryDetails.styles';
import EntryCommentsDrawer from '../../CommentsDrawer/EntryCommentsDrawer';

interface EntryDetailsProps {
  data: Entry;
  isUpdatingComments?: boolean;
  listMode?: boolean;
  containerRef?: RefCallback<HTMLElement>;
}

const EntryDetails = ({
  data,
  listMode = false,
  isUpdatingComments = false,
  containerRef,
}: EntryDetailsProps) => {
  const { media, user, body, id, date, commentsCount, voteCountPlus, comments, survey } = data;
  const navigate = useNavigate();
  const parsedBody = useMemo(() => parseHtml(body), [body]);
  const [isCommentsDrawerOpened, setIsCommentsDrawerOpened] = useState(false);

  const handleNavigateToEntry = listMode
    ? () => {
        if (document.getSelection()?.isCollapsed) {
          navigate(`/wpis/${id}`, { state: data });
        }
      }
    : undefined;

  const handleOpenEntryInNewTab = listMode ? openInNewTab(`/wpis/${id}`) : undefined;
  const handleToggleCommentsDrawer = stopPropagation((e) => {
    e.preventDefault();
    setIsCommentsDrawerOpened((prev) => !prev);
  });

  const handleShare = stopPropagation(() =>
    navigator
      .share({
        url: `${window.location.origin}/wpis/${id}`,
      })
      .catch(() => undefined)
  );

  return (
    <Card
      ref={containerRef}
      onClick={handleNavigateToEntry}
      onMouseUp={handleOpenEntryInNewTab}
      listMode={listMode}
    >
      <UserHeader user={user} date={date} />

      <ContentContainer>
        <TextContentContainer variant='body1'>{parsedBody}</TextContentContainer>
        {media && (
          <Media
            sourceUrl={media.url}
            imageUrl={media.previewUrl}
            type={media.type}
            plus18={media.plus18}
            ratio={media.ratio}
            listMode={listMode}
          />
        )}
        {survey && <SurveyResults survey={survey} />}
      </ContentContainer>

      <Divider variant='middle' />

      <S.Statistics>
        <Button startIcon={<PlusIcon />} color='inherit' onClick={handleStopPropagation}>
          <Typography>{voteCountPlus}</Typography>
        </Button>

        <Button
          startIcon={<CommentsIcon/>}
          onClick={handleToggleCommentsDrawer}
          onMouseUp={handleStopPropagation}
          color='inherit'
          component={RouterLink}
          to={`/wpis/${id}`}
          disabled={!listMode}
          title={`Wpis użytkownika @${user.login}`}
        >
          <Typography>{commentsCount}</Typography>
        </Button>

        {!!navigator.share && (
          <IconButton onClick={handleShare} size='small'>
            <ShareIcon fontSize='small'/>
          </IconButton>
        )}
      </S.Statistics>
      {isCommentsDrawerOpened && listMode && (
        <EntryCommentsDrawer
          entry={data}
          open={isCommentsDrawerOpened}
          onOpen={() => setIsCommentsDrawerOpened(true)}
          onClose={() => setIsCommentsDrawerOpened(false)}
        />
      )}
      {!listMode && !isUpdatingComments && (
        <>
          <Divider variant='middle' />
          <Comments comments={comments} />
        </>
      )}
    </Card>
  );
};

export default EntryDetails;
