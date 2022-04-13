import { styled } from '@mui/material/styles';

interface ContainerProps {
  aspectRatio?: number;
  unblockMaxHeight: boolean;
}

export const Container = styled('div', {
  shouldForwardProp: (prop) => prop !== 'aspectRatio' && prop !== 'unblockMaxHeight',
})<ContainerProps>(({ theme, aspectRatio, unblockMaxHeight }) => ({
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
  width: '100%',
  ...(blur && { filter: 'blur(10px)' }),

  maxHeight: 550,
  [theme.breakpoints.up('sm')]: {
    maxHeight: 650,
  },
}));
