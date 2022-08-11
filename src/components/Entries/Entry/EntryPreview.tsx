import {
  Message as CommentsIcon,
  AddBox as PlusIcon,
  Share as ShareIcon,
} from '@mui/icons-material';
import { Typography, Button, Divider, IconButton } from '@mui/material';
import { RefCallback, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EntryCommentsDrawer from 'components/CommentsDrawer/EntryCommentsDrawer';
import Media from 'components/Media/Media';
import SurveyResults from 'components/SurveyResults/SurveyResults';
import { Card, ContentContainer, TextContainer } from 'components/UI/Containers';
import UserHeader from 'components/UI/UserHeader';
import { Entry } from 'types';
import { parseHtml } from 'utils/parseHtml';
import { openInNewTab, stopPropagation, handleStopPropagation } from 'utils/windowUtils';
import * as S from './Entry.styles';

interface EntryPreviewProps {
  data: Entry;
  containerRef?: RefCallback<HTMLElement>;
}

const EntryPreview = ({ data, containerRef }: EntryPreviewProps) => {
  const { media, user, body, id, date, commentsCount, voteCountPlus, survey } = data;
  const navigate = useNavigate();
  const parsedBody = useMemo(() => parseHtml(body), [body]);
  const [isCommentsDrawerOpened, setIsCommentsDrawerOpened] = useState(false);

  const handleNavigateToEntry = () => {
    if (document.getSelection()?.isCollapsed) {
      navigate(`/wpis/${id}`, { state: data });
    }
  };

  const handleToggleCommentsDrawer = stopPropagation((e) => {
    e.preventDefault();
    setIsCommentsDrawerOpened((prev) => !prev);
  });

  const handleShare = stopPropagation(() => {
    navigator
      .share({
        url: `${window.location.origin}/wpis/${id}`,
      })
      .catch(() => undefined);
  });

  const handleOpenCommentsDrawer = () => setIsCommentsDrawerOpened(true);
  const handleCloseCommentsDrawer = () => setIsCommentsDrawerOpened(false);

  return (
    <Card
      ref={containerRef}
      onClick={handleNavigateToEntry}
      onMouseUp={openInNewTab(`/wpis/${id}`)}
      listMode
    >
      <UserHeader user={user} date={date} />

      <ContentContainer>
        <TextContainer>{parsedBody}</TextContainer>
        {media && (
          // eslint-disable-next-line jsx-a11y/no-static-element-interactions
          <div onClick={media.type !== 'image' ? handleStopPropagation : undefined}>
            <Media
              sourceUrl={media.url}
              imageUrl={media.previewUrl}
              type={media.type}
              plus18={media.plus18}
              ratio={media.ratio}
              listMode
            />
          </div>
        )}
        {survey && <SurveyResults survey={survey} />}
      </ContentContainer>

      <Divider variant='middle' />

      <S.Statistics>
        <Button startIcon={<PlusIcon />} color='inherit' onClick={handleStopPropagation}>
          <Typography>{voteCountPlus}</Typography>
        </Button>

        <Button startIcon={<CommentsIcon />} onClick={handleToggleCommentsDrawer} color='inherit'>
          <Typography>{commentsCount}</Typography>
        </Button>

        {!!navigator.share && (
          <IconButton onClick={handleShare} size='small'>
            <ShareIcon fontSize='small' />
          </IconButton>
        )}
      </S.Statistics>

      <EntryCommentsDrawer
        entry={data}
        open={isCommentsDrawerOpened}
        onOpen={handleOpenCommentsDrawer}
        onClose={handleCloseCommentsDrawer}
      />
    </Card>
  );
};

export default EntryPreview;
