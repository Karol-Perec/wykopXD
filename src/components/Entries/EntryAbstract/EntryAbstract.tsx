import { Typography } from '@mui/material';
import Media from 'components/Media/Media';
import { RefCallback } from 'react';
import { Entry } from 'types';
import * as S from './EntryAbstract.styles';

interface EntryAbstractProps {
  entry: Entry;
  containerRef?: RefCallback<HTMLElement>;
}

const EntryAbstract = ({ entry, containerRef }: EntryAbstractProps) => {
  const { media } = entry;

  return (
    <S.Container ref={containerRef}>
      {media && (
        <Media
          sourceUrl={media.url}
          previewUrl={media.previewUrl}
          linkTo={`/entry/${entry.id}`}
          previewQuality='lq'
        />
      )}
      <Typography variant='body1'>{entry.body}</Typography>
    </S.Container>
  );
};

export default EntryAbstract;
