import { Typography } from '@mui/material';
import { RefCallback } from 'react';
import { Link } from 'types/link.types';
import LinkMedia from '../../LinkMedia/LinkMedia';
import * as S from './LinkAbstract.styles';

interface LinkAbstractProps {
  link: Link;
  containerRef?: RefCallback<HTMLElement>;
}

const LinkAbstract = ({ link, containerRef }: LinkAbstractProps) => (
  <S.Container ref={containerRef}>
    <Typography variant='h2'>{link.title}</Typography>
    <LinkMedia
      sourceUrl={link.sourceUrl}
      imageUrl={link.previewUrl}
      linkTo={`/link/${link.id}`}
      previewQuality='lq'
      plus18={link.plus18}
    />
    <Typography variant='body1'>{link.body}</Typography>
  </S.Container>
);

export default LinkAbstract;
