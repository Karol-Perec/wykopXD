import { Typography } from '@mui/material';
import Media from 'components/Media/Media';
import { RefCallback } from 'react';
import { Link } from 'types';
import * as S from './LinkAbstract.styles';

interface LinkAbstractProps {
  link: Link;
  containerRef?: RefCallback<HTMLElement>;
}

const LinkAbstract = ({ link, containerRef }: LinkAbstractProps) => (
  <S.Container ref={containerRef}>
    <Typography variant='h2'>{link.title}</Typography>
    <Media
      sourceUrl={link.sourceUrl}
      previewUrl={link.previewUrl}
      linkTo={`/link/${link.id}`}
      previewQuality='lq'
    />
    <Typography variant='body1'>{link.body}</Typography>
  </S.Container>
);

export default LinkAbstract;
