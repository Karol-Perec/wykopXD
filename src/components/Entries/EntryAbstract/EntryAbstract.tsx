import { Typography, Avatar } from '@mui/material';
import Media from 'components/Media/Media';
import { RefCallback } from 'react';
import { Entry } from 'types';
import * as S from './EntryAbstract.styles';

interface EntryAbstractProps {
  entry: Entry;
  containerRef?: RefCallback<HTMLElement>;
}

const EntryAbstract = ({ entry, containerRef }: EntryAbstractProps) => {
  const { media, user, body } = entry;

  return (
    <S.CardContainer ref={containerRef}>
      <S.AvatarContainer>
        <Avatar alt={user.login} src={user.avatarUrl} />
      </S.AvatarContainer>
      <S.ContentContainer>
        <Typography variant='subtitle1'>{user.login}</Typography>
        {media && (
          <Media
            sourceUrl={media.url}
            previewUrl={media.previewUrl}
            linkTo={`/entry/${entry.id}`}
            previewQuality='lq'
          />
        )}
        <Typography variant='body1'>{entry.body}</Typography>
      </S.ContentContainer>
    </S.CardContainer>
  );
};

export default EntryAbstract;
