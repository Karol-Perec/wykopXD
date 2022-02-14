import { Typography } from '@mui/material';
import Media from 'components/Media/Media';
import { Link } from 'types/link.types';
import * as S from './LinkAbstract.styles';

interface LinkAbstractProps {
  link: Link;
}

const LinkAbstract = ({ link }: LinkAbstractProps) => (
  <S.Container>
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
