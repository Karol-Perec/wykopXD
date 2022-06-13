import useTitle from 'hooks/useTitle';
import { Card, Container, Typography } from '@mui/material';
import { ExternalNoPropagationLink, RouterNoPropagationLink } from '../components/UI/CustomLinks';

const AppInfoPage = () => {
  useTitle('O aplikacji');

  return (
    <Container>
      <Card sx={{ p: 2, textAlign: 'center' }}>
        <img
          alt='peepoGlad'
          src='https://cdn.7tv.app/emote/60d21943f8d1379624e1ba82/4x'
          width={70}
        />
        <Typography variant='h2'>WykopX</Typography>
        <br />
        <Typography variant='h2'>
          {'Autor: '}
          <RouterNoPropagationLink to='/ludzie/Commandos'>@Commandos</RouterNoPropagationLink>
        </Typography>
        <Typography variant='h2'>
          {'Obserwuj tag: '}
          <RouterNoPropagationLink to='/tag/wykopx'>#wykopx</RouterNoPropagationLink>
        </Typography>
        <br />

        <ExternalNoPropagationLink href='https://github.com/Karol-Perec/wykopX'>
          <Typography variant='h2'>Strona projektu</Typography>
        </ExternalNoPropagationLink>
      </Card>
    </Container>
  );
};

export default AppInfoPage;
