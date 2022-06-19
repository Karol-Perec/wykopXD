import { RefCallback } from 'react';
import { Button, Divider, Typography, IconButton, useTheme, Badge } from '@mui/material';
import {
  Message as CommentsIcon,
  Share as ShareIcon,
  LocalFireDepartment as HotIcon,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { Link } from 'types';
import { handleStopPropagation, openInNewTab, stopPropagation } from 'utils/windowUtils';
import ReactPlayer from 'react-player';
import { ReactComponent as WykopIcon } from 'assets/images/logo.svg';
import { Card, ContentContainer, TextContentContainer } from '../../UI/Containers';
import * as S from './LinkDetails.styles';
import Media from '../../Media/Media';
import UserHeader from '../../UI/UserHeader';
import Comments from '../../Comments/Comments';

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

  const handleNavigateToLink = listMode
    ? () => {
        if (document.getSelection()?.isCollapsed) {
          navigate(`/link/${id}`, { state: data });
        }
      }
    : undefined;

  const handleOpenLinkInNewTab = listMode ? openInNewTab(`/link/${id}`) : undefined;

  const handleShare = stopPropagation(() =>
    navigator
      .share({
        url: `${window.location.origin}/link/${id}`,
      })
      .catch(() => undefined)
  );

  return (
    <Card
      ref={containerRef}
      onClick={handleNavigateToLink}
      onMouseUp={handleOpenLinkInNewTab}
      listMode={listMode}
    >
      <UserHeader user={user} date={date} />

      <ContentContainer>
        <TextContentContainer variant='h5'>{title}</TextContentContainer>

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
              <Badge badgeContent={<HotIcon style={{ height: 16 }} color='error' />}>
                <WykopIcon height={18} fill={theme.palette.action.active} />
              </Badge>
            ) : (
              <WykopIcon height={18} fill={theme.palette.action.active} />
            )
          }
          onClick={handleStopPropagation}
          color='inherit'
        >
          <Typography>{voteCountPlus}</Typography>
        </Button>

        <Button startIcon={<CommentsIcon />} color='inherit'>
          <Typography>{commentsCount}</Typography>
        </Button>

        {!!navigator.share && (
          <IconButton onClick={handleShare}>
            <ShareIcon />
          </IconButton>
        )}
      </S.Statistics>
      {!listMode && !!comments?.length && <Comments comments={comments} />}
    </Card>
  );
};

export default LinkDetails;
