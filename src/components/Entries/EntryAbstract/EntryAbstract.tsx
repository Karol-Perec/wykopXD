import { Typography, Avatar } from '@mui/material';
import Media from 'components/Media/Media';
import { RefCallback } from 'react';
import { Entry } from 'types';
import { calculateAprroximatedAge } from '../../../utils/dateUtils';
import UnstyledRouterLink from '../../UI/UnstyledRouterLink';
import * as S from './EntryAbstract.styles';

interface EntryAbstractProps {
  entry: Entry;
  containerRef?: RefCallback<HTMLElement>;
}

const EntryAbstract = ({ entry, containerRef }: EntryAbstractProps) => {
  const { media, user, body, id, date } = entry;

  return (
    <S.Card ref={containerRef}>
      <UnstyledRouterLink to={`/entry/${id}`}>
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
      </UnstyledRouterLink>
    </S.Card>
  );
};

export default EntryAbstract;
