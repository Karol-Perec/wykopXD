import { styled } from '@mui/material/styles';

export const Container = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',

  [theme.breakpoints.up('sm')]: {
    marginRight: theme.spacing(2),
  },
}));

interface GifProps {
  blur: boolean;
}

export const Gif = styled('img', {
  shouldForwardProp: (prop) => prop !== 'blur',
})<GifProps>(({ theme, blur }) => ({
  maxWidth: '100%',
  maxHeight: 550,
  borderRadius: 10,
  verticalAlign: 'top',
  ...(blur && { filter: 'blur(40px)', ':hover': { cursor: 'pointer' } }),

  [theme.breakpoints.up('sm')]: {
    maxHeight: 650,
  },
}));

export const GifContainer = styled('div')({
  borderRadius: 10,
  overflow: 'hidden',
});
