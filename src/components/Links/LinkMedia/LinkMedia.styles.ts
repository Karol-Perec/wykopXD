import { styled } from '@mui/material/styles';
import { ReactComponent as Logo } from 'assets/images/logo.svg';

interface ContainerProps {
  ratio?: number;
}

export const Container = styled('div', {
  shouldForwardProp: (prop) => prop !== 'ratio',
})<ContainerProps>(({ theme, ratio }) => ({
  display: 'inline-block',
  boxSizing: 'border-box',
  width: '100%',

  aspectRatio: '16 / 9',
  '@supports not (aspect-ratio: 16 / 9)': {
    '::before': {
      float: 'left',
      paddingTop: '56.25%',
      content: '""',
    },

    '::after': {
      display: 'block',
      content: '""',
      clear: 'both',
    },
  },

  '@media (min-width: 600px)': {
    width: 190,
  },
}));

export const Image = styled('img')({
  borderRadius: 10,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

export const DefaultImage = styled(Logo)(({ theme }) => ({
  fill: theme.palette.text.primary,
  height: 150,
  width: 150,
  display: 'inline-block',
}));
