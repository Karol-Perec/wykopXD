import { RefCallback, useMemo } from 'react';
import {
  Message as CommentsIcon,
  AddBox as PlusIcon,
  Share as ShareIcon,
} from '@mui/icons-material';
import { Typography, Button, Divider, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Media from 'components/Media/Media';
import { Entry } from 'types';
import { parseHtml } from 'utils/parseHtml';
import { openInNewTab, stopPropagation, handleStopPropagation } from 'utils/windowUtils';
import Comments from '../../Comments/Comments';
import { Card } from '../../UI/Card';
import ContentHeader from '../../UI/ContentHeader';
import SurveyAnswer from '../../UI/SurveyAnswer';
import * as S from './EntryDetails.styles';

interface EntryDetailsProps {
  data: Entry;
  listMode?: boolean;
  containerRef?: RefCallback<HTMLElement>;
}

const EntryDetails = ({ data, listMode = false, containerRef }: EntryDetailsProps) => {
  const { media, user, body, id, date, commentsCount, voteCountPlus, comments, survey } = data;
  const navigate = useNavigate();
  const parsedBody = useMemo(() => parseHtml(body), [body]);

  const handleNavigateToEntry = listMode
    ? () => {
        if (document.getSelection()?.isCollapsed) {
          navigate(`/wpis/${id}`, { state: data });
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
      <ContentHeader user={user} date={date} />

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
        {survey && (
          <S.SurveyContainer>
            <Typography textAlign='center'>{survey.question}</Typography>
            {survey.answers.map((answer) => (
              <SurveyAnswer
                answer={answer}
                key={answer.id}
                isActive={survey.userAnswer === answer.id}
              />
            ))}
          </S.SurveyContainer>
        )}
      </S.EntryContent>
      <Divider variant='middle' />
      <S.Statistics>
        <Button startIcon={<PlusIcon />} color='inherit' onClick={handleStopPropagation}>
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

export default EntryDetails;
