import { styled } from '@mui/material/styles';

export const Container = styled('div')(({ theme }) => ({
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
  ...(blur && { filter: 'blur(40px)', ':hover': { cursor: 'pointer' } }),

  maxHeight: 550,
  [theme.breakpoints.up('sm')]: {
    maxHeight: 650,
  },
}));

export const ImageContainer = styled('div')({
  borderRadius: 10,
  overflow: 'hidden'
});