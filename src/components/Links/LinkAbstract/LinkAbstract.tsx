import { Typography } from '@mui/material';
import Media from 'components/Media/Media';
import { Link } from 'types/Link.type';
import * as S from './LinkAbstract.styles';

interface LinkAbstractProps {
  link: Link;
}

const LinkAbstract = ({ link }: LinkAbstractProps) => {
  return (
    <S.Container>
      <Typography variant='h2'>{link.title}</Typography>
      <Media
        sourceUrl={link.sourceUrl}
        preview={link.preview}
        linkTo={'/link/' + link.id}
      />
      <Typography variant='body1'>{link.description}</Typography>
    </S.Container>
  );
};

export default LinkAbstract;
