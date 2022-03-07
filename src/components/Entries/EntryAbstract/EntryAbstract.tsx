import { Typography, Avatar } from '@mui/material';
import Media from 'components/Media/Media';
import { RefCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Entry } from 'types';
import { calculateAprroximatedAge } from '../../../utils/dateUtils';
import { parseHtml } from '../../../utils/parseHtml';
import * as S from './EntryAbstract.styles';

interface EntryAbstractProps {
  entry: Entry;
  containerRef?: RefCallback<HTMLElement>;
}

const EntryAbstract = ({ entry, containerRef }: EntryAbstractProps) => {
  const { media, user, body, id, date } = entry;
  const navigate = useNavigate();

  console.log(parseHtml(body));

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
      <S.EntryHeader>
        <Avatar alt={user.login} src={user.avatarUrl} variant='rounded' />
        <S.EntryHeaderMeta>
          <Typography variant='subtitle1'>{user.login}</Typography>
          <Typography variant='caption'>{calculateAprroximatedAge(date)}</Typography>
        </S.EntryHeaderMeta>
      </S.EntryHeader>
      <S.EntryContent>
        <S.TextContent variant='body1'>{parseHtml(body)}</S.TextContent>
        {media && (
          <Media
            sourceUrl={media.url}
            previewUrl={media.previewUrl}
            linkTo={`/entry/${id}`}
            previewQuality='lq'
          />
        )}
      </S.EntryContent>
    </S.Card>
  );
};

export default EntryAbstract;
