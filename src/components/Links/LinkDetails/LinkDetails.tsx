import { RefCallback, useState } from 'react';
import { Button, Divider, Typography, IconButton, useTheme, Badge } from '@mui/material';
import {
  Message as CommentsIcon,
  Share as ShareIcon,
  LocalFireDepartment as HotIcon,
} from '@mui/icons-material';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import { Link } from 'types';
import { handleStopPropagation, openInNewTab, stopPropagation } from 'utils/windowUtils';
import ReactPlayer from 'react-player';
import { ReactComponent as WykopIcon } from 'assets/images/logo.svg';
import { Card, ContentContainer, TextContentContainer } from '../../UI/Containers';
import * as S from './LinkDetails.styles';
import Media from '../../Media/Media';
import UserHeader from '../../UI/UserHeader';
import Comments from '../../Comments/Comments';
import { RouterNoPropagationLink } from '../../UI/CustomLinks';
import LinkCommentsDrawer from '../../CommentsDrawer/LinkCommentsDrawer';

interface LinkDetailsProps {
  data: Link;
  listMode?: boolean;
  containerRef?: RefCallback<HTMLElement>;
}

const LinkDetails = ({ data, listMode = false, containerRef }: LinkDetailsProps) => {
  const {
    id,
    body,
    date,
    plus18,
    previewUrl,
    sourceUrl,
    title,
    user,
    comments,
    commentsCount,
    voteCountPlus,
    isHot,
  } = data;
  const theme = useTheme();
  const navigate = useNavigate();
  const [isCommentsDrawerOpened, setIsCommentsDrawerOpened] = useState(false);

  const handleNavigateToLink = () => {
    if (document.getSelection()?.isCollapsed) {
      navigate(`/link/${id}`, { state: data });
    }
  };

  const handleToggleCommentsDrawer = stopPropagation((e) => {
    e.preventDefault();
    setIsCommentsDrawerOpened((prev) => !prev);
  });

  const handleShare = stopPropagation(() => {
    navigator
      .share({
        url: `${window.location.origin}/link/${id}`,
      })
      .catch(() => undefined);
  });

  const handleOpenCommentsDrawer = () => setIsCommentsDrawerOpened(true);
  const handleCloseCommentsDrawer = () => setIsCommentsDrawerOpened(false);

  return (
    <Card
      ref={containerRef}
      onClick={listMode ? handleNavigateToLink : undefined}
      onMouseUp={listMode ? openInNewTab(`/link/${id}`) : undefined}
      listMode={listMode}
    >
      <UserHeader user={user} date={date} />

      <ContentContainer>
        <RouterNoPropagationLink to={`/link/${id}`} color='inherit' title={title} underline='none'>
          <TextContentContainer variant='h5'>{title}</TextContentContainer>
        </RouterNoPropagationLink>

        <Media
          sourceUrl={sourceUrl}
          imageUrl={previewUrl}
          type={ReactPlayer.canPlay(sourceUrl) ? 'video' : 'image'}
          plus18={plus18}
          ratio={9 / 16}
          listMode={listMode}
        />

        <TextContentContainer>{body}</TextContentContainer>
      </ContentContainer>

      <Divider variant='middle' />
      <S.Statistics>
        <Button
          startIcon={
            isHot ? (
              <Badge badgeContent={<HotIcon style={{ height: 14 }} color='error' />}>
                <WykopIcon height={18} width={24} fill={theme.palette.action.active} />
              </Badge>
            ) : (
              <WykopIcon height={18} width={24} fill={theme.palette.action.active} />
            )
          }
          onClick={handleStopPropagation}
          color='inherit'
        >
          <Typography>{voteCountPlus}</Typography>
        </Button>

        <Button
          startIcon={<CommentsIcon />}
          onClick={handleToggleCommentsDrawer}
          onMouseUp={handleStopPropagation}
          color='inherit'
          component={RouterLink}
          to={`/link/${id}`}
          title={title}
        >
          <Typography>{commentsCount}</Typography>
        </Button>

        {!!navigator.share && (
          <IconButton onClick={handleShare} size='small'>
            <ShareIcon fontSize='small' />
          </IconButton>
        )}
      </S.Statistics>

      {listMode && (
        <LinkCommentsDrawer
          link={data}
          open={isCommentsDrawerOpened}
          onOpen={handleOpenCommentsDrawer}
          onClose={handleCloseCommentsDrawer}
        />
      )}

      {!listMode && (
        <>
          <Divider variant='middle' />
          <Comments comments={comments} />
        </>
      )}
    </Card>
  );
};

export default LinkDetails;
