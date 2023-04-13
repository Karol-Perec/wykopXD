import {
  ModeCommentOutlined as CommentsIcon,
  ThumbUpOutlined as ThumbUpIcon,
  Share as ShareIcon,
} from '@mui/icons-material';
import { Typography, Button, Divider, IconButton } from '@mui/material';
import { RefCallback, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EntryCommentsDrawer from '~/components/CommentsDrawer/EntryCommentsDrawer';
import Media from '~/components/Media/Media';
import SurveyResults from '~/components/SurveyResults/SurveyResults';
import { Card, ContentContainer, TextContainer } from '~/components/UI/Containers';
import UserHeader from '~/components/UI/UserHeader';
import { Entry } from '~/types';
import { parseMarkdown } from '~/utils/parseMarkdown';
import { openInNewTab, stopPropagation, handleStopPropagation } from '~/utils/windowUtils';
import * as S from './Entry.styles';

interface EntryPreviewProps {
  entry: Entry;
  containerRef?: RefCallback<HTMLElement>;
}

const EntryPreview = ({ entry, containerRef }: EntryPreviewProps) => {
  const { media, author, content, id, votes, created_at: createdAt, comments, adult } = entry;
  const navigate = useNavigate();
  const parsedContent = useMemo(() => parseMarkdown(content), [content]);
  const [isCommentsDrawerOpened, setIsCommentsDrawerOpened] = useState(false);

  const handleNavigateToEntry = () => {
    if (document.getSelection()?.isCollapsed) {
      navigate(`/wpis/${id}`, { state: entry });
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
      <UserHeader user={author} date={createdAt} />

      <ContentContainer>
        <TextContainer>{parsedContent}</TextContainer>
        {media.photo && (
          // eslint-disable-next-line jsx-a11y/no-static-element-interactions
          <div onClick={(media.embed?.type as any) !== 'image' ? handleStopPropagation : undefined}>
            <Media
              sourceUrl={media.photo.url}
              imageUrl={media.photo.url}
              type=''
              adult={adult}
              ratio={media.photo.width / media.photo.height}
              listMode
            />
          </div>
        )}
        {/* {survey && <SurveyResults survey={survey} />} */}
      </ContentContainer>

      <Divider variant='middle' />

      <S.Statistics>
        <Button startIcon={<ThumbUpIcon />} color='inherit' onClick={handleStopPropagation}>
          <Typography>{votes.up}</Typography>
        </Button>

        <Button startIcon={<CommentsIcon />} onClick={handleToggleCommentsDrawer} color='inherit'>
          <Typography>{comments.count}</Typography>
        </Button>

        {!!navigator.share && (
          <IconButton onClick={handleShare} size='small'>
            <ShareIcon fontSize='small' />
          </IconButton>
        )}
      </S.Statistics>

      <EntryCommentsDrawer
        entry={entry}
        open={isCommentsDrawerOpened}
        onOpen={handleOpenCommentsDrawer}
        onClose={handleCloseCommentsDrawer}
      />
    </Card>
  );
};

export default EntryPreview;
