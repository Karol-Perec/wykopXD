import { styled } from '@mui/material/styles';
import { ReactComponent as Logo } from 'assets/images/logo.svg';

interface ContainerProps {
  unblockMaxWidth: boolean;
}

export const Container = styled('div')<ContainerProps>(({ theme, unblockMaxWidth }) => ({
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
  maxWidth: unblockMaxWidth ? undefined : theme.breakpoints.values.sm,
  maxHeight: (theme.breakpoints.values.sm * 16) / 9,

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
