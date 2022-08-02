import {
  Message as CommentsIcon,
  Share as ShareIcon,
  LocalFireDepartment as HotIcon,
} from '@mui/icons-material';
import { Button, Divider, Typography, IconButton, useTheme, Badge } from '@mui/material';
import { RefCallback, useRef, useState } from 'react';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import { ReactComponent as WykopIcon } from 'assets/images/logo.svg';
import Comments from 'components/Comments/Comments';
import LinkCommentsDrawer from 'components/CommentsDrawer/LinkCommentsDrawer';
import Media from 'components/Media/Media';
import { Card, TextContentContainer } from 'components/UI/Containers';
import { RouterNoPropagationLink } from 'components/UI/CustomLinks';
import UserHeader from 'components/UI/UserHeader';
import { Link } from 'types';
import { getLinkMediaType } from 'utils/mediaUtils';
import { handleStopPropagation, openInNewTab, stopPropagation } from 'utils/windowUtils';
import * as S from './LinkDetails.styles';

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
  const mediaContainerRef = useRef<HTMLDivElement>(null);
  const mediaType = getLinkMediaType(sourceUrl);

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

  const handleEnlargeVideo = stopPropagation(() => {
    if (mediaContainerRef?.current) mediaContainerRef.current.style.width = '100%';
  });

  const textContent = (
    <>
      <TextContentContainer variant='h6'>{title}</TextContentContainer>
      <TextContentContainer>{body}</TextContentContainer>
    </>
  );

  return (
    <Card
      ref={containerRef}
      onClick={listMode ? handleNavigateToLink : undefined}
      onMouseUp={listMode ? openInNewTab(`/link/${id}`) : undefined}
      listMode={listMode}
    >
      <UserHeader user={user} date={date} />

      <S.ContentContainer>
        <S.MediaContainer
          ref={mediaContainerRef}
          onClick={mediaType !== 'image' ? handleEnlargeVideo : undefined}
          listMode={listMode}
        >
          <Media
            sourceUrl={sourceUrl}
            imageUrl={previewUrl}
            type={mediaType}
            plus18={plus18}
            ratio={9 / 16}
            listMode={listMode}
          />
        </S.MediaContainer>

        <div style={{ flexGrow: 1, width: '100px', display: 'inline-block' }}>
          {listMode ? (
            <RouterNoPropagationLink
              to={`/link/${id}`}
              color='inherit'
              title={title}
              underline='none'
              state={data}
            >
              {textContent}
            </RouterNoPropagationLink>
          ) : (
            textContent
          )}
        </div>
      </S.ContentContainer>

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

        <Button startIcon={<CommentsIcon />} onClick={handleToggleCommentsDrawer} color='inherit'>
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
