import { Typography, Avatar } from '@mui/material';
import Media from 'components/Media/Media';
import { RefCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Entry } from 'types';
import { calculateAprroximatedAge } from '../../../utils/dateUtils';
import * as S from './EntryAbstract.styles';

interface EntryAbstractProps {
  entry: Entry;
  containerRef?: RefCallback<HTMLElement>;
}

const EntryAbstract = ({ entry, containerRef }: EntryAbstractProps) => {
  const { media, user, body, id, date } = entry;
  const navigate = useNavigate();

  return (
    <S.Card
      ref={containerRef}
      onClick={() => navigate(`/entry/${id}`)}
      onMouseDown={(e) => {
        if (e.button === 1) {
          window.open(`/entry/${id}`, '_blank', 'noopener,noreferrer');
        }
      }}
    >
      <S.UserSection>
        <Avatar alt={user.login} src={user.avatarUrl} variant='rounded' />
        <div>
          <Typography variant='subtitle1'>{user.login}</Typography>
          <Typography>{calculateAprroximatedAge(date)}</Typography>
        </div>
      </S.UserSection>
      <S.ContentSection>
        <Typography variant='body1'>{body}</Typography>
        {media && (
          <Media
            sourceUrl={media.url}
            previewUrl={media.previewUrl}
            linkTo={`/entry/${id}`}
            previewQuality='lq'
          />
        )}
      </S.ContentSection>
    </S.Card>
  );
};

export default EntryAbstract;
