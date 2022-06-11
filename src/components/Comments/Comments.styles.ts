import { styled } from '@mui/material';

interface ContainerProps {
  visible: boolean;
}

export const Container = styled('div', {
  shouldForwardProp: (prop) => prop !== 'visible',
})<ContainerProps>(({ visible }) => ({
  display: visible ? 'block' : 'none',
}));

export const CommentsListContainer = styled('div')(({ theme }) => ({
  marginLeft: theme.spacing(4),
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(6),
  },
}));
