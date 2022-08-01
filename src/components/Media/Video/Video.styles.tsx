import { styled } from '@mui/material/styles';

interface ContainerProps {
  ratio?: number;
}

export const VideoWrapper = styled('div', {
  shouldForwardProp: (prop) => prop !== 'ratio',
})<ContainerProps>(({ ratio }) => ({
  width: '100%',
  borderRadius: 10,
  overflow: 'hidden',

  aspectRatio: ratio ? String(1 / ratio) : '16 / 9',
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
}));

export const Container = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  borderRadius: 10,

  maxHeight: 550,
  [theme.breakpoints.up('sm')]: {
    marginRight: theme.spacing(2),
    maxHeight: 650,
    overflow: 'hidden',
  },
}));
