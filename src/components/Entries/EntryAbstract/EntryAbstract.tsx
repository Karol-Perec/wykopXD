import {
  ChatBubbleOutlineRounded as CommentsIcon,
  ControlPoint as PlusIcon,
} from '@mui/icons-material';
import { Typography, Avatar, Button, Divider, Link, Tooltip } from '@mui/material';
import Media from 'components/Media/Media';
import { RefCallback, useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Entry } from 'types';
import { calculateAprroximatedAge } from '../../../utils/dateUtils';
import { parseHtml } from '../../../utils/parseHtml';
import { RouterNoPropagationLink, UnstyledRouterLink } from '../../UI/CustomLinks';
import Comments from '../Comments/Comments';
import * as S from './EntryAbstract.styles';

interface EntryAbstractProps {
  entry: Entry;
  containerRef?: RefCallback<HTMLElement>;
}

const EntryAbstract = ({ entry, containerRef }: EntryAbstractProps) => {
  const { media, user, body, id, date, commentsCount, voteCountPlus, comments } = entry;
  const navigate = useNavigate();
  const [showComments, setShowComments] = useState(false);

  return (
    <S.Card
      ref={containerRef}
      onClick={() => {
        if (document.getSelection()?.isCollapsed) {
          navigate(`/entry/${id}`);
        }
      }}
      onMouseUp={(e) => {
        if (e.button === 1) {
          window.open(`/entry/${id}`, '_blank', 'noopener,noreferrer');
        }
      }}
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
            previewQuality='lq'
            type={media.type}
            plus18={media.plus18}
            aspectRatio={media.aspectRatio}
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
