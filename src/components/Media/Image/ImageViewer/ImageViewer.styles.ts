import { styled } from '@mui/material/styles';

export const Container = styled('div')({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
});

export const Image = styled('img')({
  width: '100vw',
  maxWidth: 700,
});
