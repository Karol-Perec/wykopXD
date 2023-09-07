import { Card, Container, Typography } from '@mui/material';
import { ExternalNoPropagationLink, RouterNoPropagationLink } from '~/components/UI/CustomLinks';
import useTitle from '~/hooks/useTitle';

const AppInfoPage = () => {
  useTitle('O aplikacji');

  return (
    <Container>
      <Card sx={{ p: 2, textAlign: 'center' }}>
        <img alt='peepoGlad' src='https://cdn.7tv.app/emote/60d21943f8d1379624e1ba82/4x.webp' width={80} />
        <Typography variant='h2'>WykopXD</Typography>
        <br />
        <Typography variant='h2'>
          {'Autor: '}
          <RouterNoPropagationLink to='/ludzie/Commandos' title='@Commandos'>
            @Commandos
          </RouterNoPropagationLink>
        </Typography>
        <Typography variant='h2'>
          {'Obserwuj tag: '}
          <RouterNoPropagationLink to='/tag/wykopxd' title='#wykopxd'>
            #wykopxd
          </RouterNoPropagationLink>
        </Typography>
        <br />

        <ExternalNoPropagationLink href='https://github.com/Karol-Perec/wykopXD' title='GitHub | WykopXD'>
          <Typography variant='h2'>Strona projektu</Typography>
        </ExternalNoPropagationLink>
      </Card>
    </Container>
  );
};

export default AppInfoPage;
