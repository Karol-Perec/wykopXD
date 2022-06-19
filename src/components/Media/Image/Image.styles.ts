import { styled } from '@mui/material/styles';

interface ContainerProps {
  ratio?: number;
  unblockMaxHeight: boolean;
}

export const Container = styled('div', {
  shouldForwardProp: (prop) => prop !== 'ratio' && prop !== 'unblockMaxHeight',
})<ContainerProps>(({ theme, ratio, unblockMaxHeight }) => ({
  display: 'flex',
  justifyContent: 'center',

  [theme.breakpoints.up('sm')]: {
    marginRight: theme.spacing(2),
  },
}));

interface ImageProps {
  blur: boolean;
}

export const Image = styled('img', {
  shouldForwardProp: (prop) => prop !== 'blur',
})<ImageProps>(({ theme, blur }) => ({
  borderRadius: 10,

  maxWidth: '100%',
  ...(blur && { ':hover': { cursor: 'pointer' } }),

  maxHeight: 550,
  [theme.breakpoints.up('sm')]: {
    maxHeight: 650,
  },
}));
