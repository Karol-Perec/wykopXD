import { styled } from '@mui/material';

interface ContainerProps {
  visible: boolean;
}

export const Container = styled('div', {
  shouldForwardProp: (prop) => prop !== 'visible',
})<ContainerProps>(({ theme, visible }) => ({
  display: visible ? 'block' : 'none',
  marginLeft: theme.spacing(4),
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(8.5),
  },
}));
