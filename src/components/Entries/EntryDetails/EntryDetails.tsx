import {
  ChatBubbleOutlineRounded as CommentsIcon,
  ControlPoint as PlusIcon,
} from '@mui/icons-material';
import { Typography, Button, Divider, Tooltip } from '@mui/material';
import { RefCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Media from 'components/Media/Media';
import { Entry } from 'types';
import { calculateAprroximatedAge } from 'utils/dateUtils';
import { parseHtml } from 'utils/parseHtml';
import { RouterNoPropagationLink } from 'components/UI/CustomLinks';
import Avatar from 'components/UI/Avatar';
import { openInNewTab, stopPropagation, stopPropagationHandler } from 'utils/windowUtils';
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
  const [showComments, setShowComments] = useState(!listMode);

  const toggleShowComments = stopPropagation(() => setShowComments((prev) => !prev));

  const handleNavigateToEntryPage = () => {
    if (document.getSelection()?.isCollapsed) {
      navigate(`/wpis/${id}`);
    }
  };

  return (
    <Card
      ref={containerRef}
      onClick={listMode ? handleNavigateToEntryPage : undefined}
      onMouseUp={listMode ? openInNewTab(`/wpis/${id}`) : undefined}
      listMode={listMode}
    >
      <S.EntryHeader>
        <RouterNoPropagationLink to={`/ludzie/${user.login}`}>
          <Avatar src={user.avatarUrl} size={40} />
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
      <Divider variant='middle' />
      <S.Statistics>
        <Button startIcon={<CommentsIcon />} color='inherit' onClick={toggleShowComments}>
          <Typography>{commentsCount}</Typography>
        </Button>
        <Button startIcon={<PlusIcon />} color='inherit' onClick={stopPropagationHandler}>
          <Typography>{voteCountPlus}</Typography>
        </Button>
      </S.Statistics>
      <Divider variant='middle' />
      {showComments && comments?.length && <Comments comments={comments} />}
    </Card>
  );
};

export default EntryDetails;
