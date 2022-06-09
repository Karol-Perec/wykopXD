import { RefCallback, useMemo, useState } from 'react';
import {
  Message as CommentsIcon,
  AddBox as PlusIcon,
  Share as ShareIcon,
} from '@mui/icons-material';
import { Typography, Button, Divider, Tooltip, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Media from 'components/Media/Media';
import { Entry } from 'types';
import { calculateAprroximatedAge } from 'utils/dateUtils';
import { parseHtml } from 'utils/parseHtml';
import { RouterNoPropagationLink } from 'components/UI/CustomLinks';
import Avatar from 'components/UI/Avatar';
import { openInNewTab, stopPropagation, handleStopPropagation } from 'utils/windowUtils';
import { USER_COLOR } from 'constants/userColor.constat';
import { TEXT_SEPARATOR } from 'constants/texts.constant';
import Comments from '../Comments/Comments';
import * as S from './EntryDetails.styles';
import { Card } from '../../UI/Card';

interface EntryDetailsProps {
  data: Entry;
  listMode?: boolean;
  containerRef?: RefCallback<HTMLElement>;
}

const EntryDetails = ({ data, listMode = false, containerRef }: EntryDetailsProps) => {
  const { media, user, body, id, date, commentsCount, voteCountPlus, comments } = data;
  const navigate = useNavigate();
  const [isShowingComments, setIsShowingComments] = useState(!listMode);
  const [didToggleComments, setDidToggleComments] = useState(!listMode);
  const parsedBody = useMemo(() => parseHtml(body), [body]);

  const handleToggleComments = stopPropagation(() => {
    setIsShowingComments((prev) => !prev);
    setDidToggleComments(true);
  });

  const handleNavigateToEntry = listMode
    ? () => {
        if (document.getSelection()?.isCollapsed) {
          navigate(`/wpis/${id}`);
        }
      }
    : undefined;

  const handleOpenEntryInNewTab = listMode ? openInNewTab(`/wpis/${id}`) : undefined;

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
      <S.EntryHeader>
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
      </S.EntryHeader>
      <S.EntryContent>
        <S.TextContent variant='body1'>{parsedBody}</S.TextContent>
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
      </S.EntryContent>
      <Divider variant='middle' />
      <S.Statistics>
        <Button startIcon={<PlusIcon />} color='inherit' onClick={handleStopPropagation}>
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

export default EntryDetails;
