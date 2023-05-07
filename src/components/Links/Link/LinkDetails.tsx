import {
  ModeCommentOutlined as CommentsIcon,
  Share as ShareIcon,
  LocalFireDepartment as HotIcon,
} from '@mui/icons-material';
import { Button, Divider, Typography, IconButton, useTheme, Badge } from '@mui/material';
import { ReactComponent as WykopIcon } from '~/assets/images/logo.svg';
import Comments from '~/components/Comments/Comments';
import Media from '~/components/Media/Media';
import { Card, MainContentContainer, TextContainer } from '~/components/UI/Containers';
import { ExternalNoPropagationLink } from '~/components/UI/CustomLinks';
import UserHeader from '~/components/UI/UserHeader';
import { Link } from '~/types';
import { getLinkMediaType } from '~/utils/mediaUtils';
import * as S from './Link.styles';

interface LinkDetailsProps {
  data: Link;
}

const LinkDetails = ({ data }: LinkDetailsProps) => {
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
  // const mediaType = getLinkMediaType(sourceUrl);

  const handleShare = () => {
    navigator
      .share({
        url: `${window.location.origin}/link/${id}/${slug}`,
      })
      .catch(() => undefined);
  };

  return (
    <MainContentContainer>
      <Card>
        <UserHeader user={user} date={date} />

        <S.ContentContainer>
          {/* <S.MediaContainer>
            <Media
              sourceUrl={sourceUrl}
              imageUrl={previewUrl}
              type={mediaType}
              adult={adult}
              ratio={9 / 16}
            />
          </S.MediaContainer> */}

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
    </MainContentContainer>
  );
};

export default LinkDetails;
