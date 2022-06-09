import { RefCallback, useState } from 'react';
import { Button, Divider, Tooltip, Typography, IconButton, useTheme } from '@mui/material';
import {
  Message as CommentsIcon,
  Share as ShareIcon,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { Link } from 'types';
import { handleStopPropagation, openInNewTab, stopPropagation } from 'utils/windowUtils';
import { TEXT_SEPARATOR } from 'constants/texts.constant';
import { USER_COLOR } from 'constants/userColor.constat';
import { calculateAprroximatedAge } from 'utils/dateUtils';
import ReactPlayer from 'react-player';
import { ReactComponent as WykopIcon } from 'assets/images/logo.svg';
import Avatar from '../../UI/Avatar';
import { Card } from '../../UI/Card';
import { RouterNoPropagationLink } from '../../UI/CustomLinks';
import * as S from './LinkDetails.styles';
import Comments from '../../Entries/Comments/Comments';
import Media from '../../Media/Media';

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
  } = data;
  const theme = useTheme();
  const navigate = useNavigate();
  const [isShowingComments, setIsShowingComments] = useState(!listMode);
  const [didToggleComments, setDidToggleComments] = useState(!listMode);

  const handleToggleComments = stopPropagation(() => {
    setIsShowingComments((prev) => !prev);
    setDidToggleComments(true);
  });

  const handleNavigateToLink = listMode
    ? () => {
        if (document.getSelection()?.isCollapsed) {
          navigate(`/link/${id}`);
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
      <S.LinkHeader>
        <RouterNoPropagationLink to={`/ludzie/${user.login}`}>
          <Avatar src={user.avatarUrl} size={24} />
        </RouterNoPropagationLink>
        <RouterNoPropagationLink to={`/ludzie/${user.login}`}>
          <Typography variant='subtitle2' component='span' color={USER_COLOR[user.status]}>
            {user.login}
          </Typography>
        </RouterNoPropagationLink>
        {TEXT_SEPARATOR}
        <Tooltip title={date}>
          <Typography variant='caption' component='span'>
            {calculateAprroximatedAge(date)}
          </Typography>
        </Tooltip>
      </S.LinkHeader>
      <S.LinkContent>
        <S.TextContent variant='h6'>{title}</S.TextContent>

        <Media
          sourceUrl={sourceUrl}
          imageUrl={previewUrl}
          type={ReactPlayer.canPlay(sourceUrl) ? 'video' : 'image'}
          plus18={plus18}
          ratio={9 / 16}
          listMode={listMode}
        />

        <Typography variant='body1'>{body}</Typography>
      </S.LinkContent>

      <Divider variant='middle' />
      <S.Statistics>
        <Button
          startIcon={<WykopIcon height={18} fill={theme.palette.action.active} />}
          onClick={handleStopPropagation}
          color='inherit'
        >
          <Typography>{voteCountPlus}</Typography>
        </Button>

        <Button startIcon={<CommentsIcon />} color='inherit' onClick={handleToggleComments}>
          <Typography>{commentsCount}</Typography>
        </Button>

        {Boolean(navigator.share) && (
          <IconButton onClick={handleShare}>
            <ShareIcon />
          </IconButton>
        )}
      </S.Statistics>
      {didToggleComments && comments?.length && (
        <Comments comments={comments} visible={isShowingComments} enablePagination={listMode} />
      )}
    </Card>
  );
};

export default LinkDetails;
