import {
  ModeCommentOutlined as CommentsIcon,
  Share as ShareIcon,
  LocalFireDepartment as HotIcon,
} from '@mui/icons-material';
import { Button, Divider, Typography, IconButton, useTheme, Badge } from '@mui/material';
import { RefCallback, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as WykopIcon } from '~/assets/images/logo.svg';
import LinkCommentsDrawer from '~/components/CommentsDrawer/LinkCommentsDrawer';
import Media from '~/components/Media/Media';
import { Card, TextContainer } from '~/components/UI/Containers';
import { RouterNoPropagationLink } from '~/components/UI/CustomLinks';
import UserHeader from '~/components/UI/UserHeader';
import { USER_COLOR } from '~/constants/userColor.constant';
import { Link } from '~/types';
import { getLinkMediaType } from '~/utils/mediaUtils';
import { handleStopPropagation, openInNewTab, stopPropagation } from '~/utils/windowUtils';
import * as S from './Link.styles';

interface LinkDetailsProps {
  data: Link;
  containerRef?: RefCallback<HTMLElement>;
}

const LinkPreview = ({ data, containerRef }: LinkDetailsProps) => {
  const {
    id,
    description,
    title,
    source,
    author,
    media,
    created_at: createdAt,
    adult,
    hot,
    comments,
    votes,
    slug,
  } = data;
  const theme = useTheme();
  const navigate = useNavigate();
  const [isCommentsDrawerOpened, setIsCommentsDrawerOpened] = useState(false);
  const mediaContainerRef = useRef<HTMLDivElement>(null);
  // const mediaType = getLinkMediaType(data);

  const handleNavigateToLink = () => {
    if (document.getSelection()?.isCollapsed) {
      navigate(`/link/${id}/${slug}`, { state: data });
    }
  };

  const handleToggleCommentsDrawer = stopPropagation((e) => {
    e.preventDefault();
    setIsCommentsDrawerOpened((prev) => !prev);
  });

  const handleShare = stopPropagation(() => {
    navigator.share({ url: `${window.location.origin}/link/${id}/${slug}` }).catch(() => undefined);
  });

  const handleOpenCommentsDrawer = () => setIsCommentsDrawerOpened(true);
  const handleCloseCommentsDrawer = () => setIsCommentsDrawerOpened(false);

  const handleEnlargeVideo = stopPropagation(() => {
    if (mediaContainerRef?.current) mediaContainerRef.current.style.width = '100%';
  });

  return (
    <Card
      ref={containerRef}
      onClick={handleNavigateToLink}
      onMouseUp={openInNewTab(`/link/${id}/${slug}`)}
      listMode
    >
      <UserHeader user={author} date={createdAt} />

      <S.ContentContainer>
        {/* <S.MediaContainer
          ref={mediaContainerRef}
          // onClick={mediaType !== 'image' ? handleEnlargeVideo : undefined}
          listMode
        >
          <Media
            sourceUrl={source.url}
            imageUrl={(media.photo?.url || media.embed?.thumbnail)!}
            type={mediaType}
            plus18={adult}
            ratio={9 / 16}
            listMode
          />
        </S.MediaContainer> */}

        <S.TextContentContainer>
          <RouterNoPropagationLink
            to={`/link/${id}/${slug}`}
            color='inherit'
            title={title}
            underline='none'
            state={data}
          >
            <TextContainer variant='h6'>{title}</TextContainer>
            <TextContainer>{description}</TextContainer>
          </RouterNoPropagationLink>
        </S.TextContentContainer>
      </S.ContentContainer>

      <Divider variant='middle' />
      <S.Statistics>
        <Button
          startIcon={
            hot ? (
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

      <LinkCommentsDrawer
        linkId={data.id}
        open={isCommentsDrawerOpened}
        onOpen={handleOpenCommentsDrawer}
        onClose={handleCloseCommentsDrawer}
      />
    </Card>
  );
};

export default LinkPreview;
