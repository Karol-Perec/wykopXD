import { styled } from '@mui/material/styles';
import { ReactComponent as Logo } from 'assets/images/logo.svg';

interface ContainerProps {
  maximizeWidth: boolean;
}

export const Container = styled('div')<ContainerProps>(({ theme, maximizeWidth }) => ({
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
  maxWidth: maximizeWidth ? undefined : 510,
  maxHeight: 510,

  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
}));

export const PreviewImg = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

export const DefaultPreviewImg = styled(Logo)(({ theme }) => ({
  fill: theme.palette.text.primary,
  height: 150,
  width: 150,
  display: 'inline-block',
}));
