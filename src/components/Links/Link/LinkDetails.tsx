import {
  Message as CommentsIcon,
  Share as ShareIcon,
  LocalFireDepartment as HotIcon,
} from '@mui/icons-material';
import { Button, Divider, Typography, IconButton, useTheme, Badge } from '@mui/material';
import { ReactComponent as WykopIcon } from 'assets/images/logo.svg';
import Comments from 'components/Comments/Comments';
import Media from 'components/Media/Media';
import { Card, TextContainer } from 'components/UI/Containers';
import { ExternalNoPropagationLink } from 'components/UI/CustomLinks';
import UserHeader from 'components/UI/UserHeader';
import { Link } from 'types';
import { getLinkMediaType } from 'utils/mediaUtils';
import * as S from './Link.styles';

interface LinkDetailsProps {
  data: Link;
}

const LinkDetails = ({ data }: LinkDetailsProps) => {
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
  const mediaType = getLinkMediaType(sourceUrl);

  const handleShare = () => {
    navigator
      .share({
        url: `${window.location.origin}/link/${id}`,
      })
      .catch(() => undefined);
  };

  return (
    <Card>
      <UserHeader user={user} date={date} />

      <S.ContentContainer>
        <S.MediaContainer>
          <Media
            sourceUrl={sourceUrl}
            imageUrl={previewUrl}
            type={mediaType}
            plus18={plus18}
            ratio={9 / 16}
          />
        </S.MediaContainer>

        <S.TextContentContainer>
          <ExternalNoPropagationLink href={sourceUrl} underline='none' color='inherit'>
            <TextContainer variant='h6'>{title}</TextContainer>
            <TextContainer>{body}</TextContainer>
          </ExternalNoPropagationLink>
        </S.TextContentContainer>
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
          color='inherit'
        >
          <Typography>{voteCountPlus}</Typography>
        </Button>

        <Button startIcon={<CommentsIcon />} color='inherit'>
          <Typography>{commentsCount}</Typography>
        </Button>

        {!!navigator.share && (
          <IconButton onClick={handleShare} size='small'>
            <ShareIcon fontSize='small' />
          </IconButton>
        )}
      </S.Statistics>

      <Divider variant='middle' />
      <Comments comments={comments} />
    </Card>
  );
};

export default LinkDetails;
