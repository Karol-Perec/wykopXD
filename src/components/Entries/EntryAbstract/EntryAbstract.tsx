import {
  ChatBubbleOutlineRounded as CommentsIcon,
  ControlPoint as PlusIcon,
} from '@mui/icons-material';
import { Typography, Avatar, Button, Divider, Tooltip } from '@mui/material';
import { MouseEventHandler, RefCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Media from 'components/Media/Media';
import { Entry } from 'types/entry.types';
import { calculateAprroximatedAge } from 'utils/dateUtils';
import { parseHtml } from 'utils/parseHtml';
import { RouterNoPropagationLink } from 'components/UI/CustomLinks';
import Comments from '../Comments/Comments';
import * as S from './EntryAbstract.styles';

interface EntryAbstractProps {
  entry: Entry;
  listMode?: boolean;
  containerRef?: RefCallback<HTMLElement>;
}

const EntryAbstract = ({ entry, listMode, containerRef }: EntryAbstractProps) => {
  const { media, user, body, id, date, commentsCount, voteCountPlus, comments } = entry;
  const navigate = useNavigate();
  const [showComments, setShowComments] = useState(!listMode);

  const handleNavigateToEntryPage = () => {
    if (document.getSelection()?.isCollapsed) {
      navigate(`/wpis/${id}`);
    }
  };

  const handleOpenInNewTab: MouseEventHandler<HTMLElement> = (e) => {
    if (e.button === 1) {
      window.open(`/wpis/${id}`, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <S.Card
      ref={containerRef}
      onClick={listMode ? handleNavigateToEntryPage : undefined}
      onMouseUp={listMode ? handleOpenInNewTab : undefined}
      listMode={listMode}
    >
      <S.EntryHeader>
        <RouterNoPropagationLink to={`/ludzie/${user.login}`}>
          <Avatar alt={user.login} src={user.avatarUrl} variant='rounded' />
        </RouterNoPropagationLink>
        <S.EntryHeaderMeta>
          <RouterNoPropagationLink to={`/ludzie/${user.login}`}>
            <Typography variant='subtitle1'>{user.login}</Typography>
          </RouterNoPropagationLink>
          <Tooltip title={date}>
            <Typography variant='caption'>{calculateAprroximatedAge(date)}</Typography>
          </Tooltip>
        </S.EntryHeaderMeta>
      </S.EntryHeader>
      <S.EntryContent>
        <S.TextContent variant='body1'>{parseHtml(body)}</S.TextContent>
        {media && (
          <Media
            sourceUrl={media.url}
            imageUrl={media.previewUrl}
            type={media.type}
            plus18={media.plus18}
            aspectRatio={media.aspectRatio}
            listMode={listMode}
          />
        )}
      </S.EntryContent>
      <Divider />
      <S.Statistics>
        <Button
          startIcon={<CommentsIcon />}
          color='inherit'
          onClick={(e) => {
            e.stopPropagation();
            setShowComments((prev) => !prev);
          }}
        >
          <Typography>{commentsCount}</Typography>
        </Button>
        <Button startIcon={<PlusIcon />} color='inherit' onClick={(e) => e.stopPropagation()}>
          <Typography>{voteCountPlus}</Typography>
        </Button>
      </S.Statistics>
      <Divider />
      {comments?.length && showComments && <Comments comments={comments} />}
    </S.Card>
  );
};

export default EntryAbstract;
