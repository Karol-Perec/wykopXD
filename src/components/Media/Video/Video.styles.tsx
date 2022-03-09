import { styled } from '@mui/material/styles';

interface ContainerProps {
  aspectRatio?: number;
  unblockMaxHeight: boolean;
}

export const Container = styled('div', {
  shouldForwardProp: (prop) => !['aspectRatio', 'unblockMaxHeight'].includes(String(prop)),
})<ContainerProps>(({ theme, aspectRatio, unblockMaxHeight }) => ({
  maxHeight: 500,

  aspectRatio: unblockMaxHeight && aspectRatio ? String(1 / aspectRatio) : '16 / 9',
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

  [theme.breakpoints.up('sm')]: {
    marginRight: theme.spacing(2),
  },
}));
