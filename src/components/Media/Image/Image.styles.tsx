import { styled } from '@mui/material/styles';

interface ContainerProps {
  aspectRatio?: number;
  unblockMaxHeight: boolean;
}

export const Container = styled('div', {
  shouldForwardProp: (prop) => !['aspectRatio', 'unblockMaxHeight'].includes(String(prop)),
})<ContainerProps>(({ theme, aspectRatio, unblockMaxHeight }) => ({
  maxHeight: 500,

  [theme.breakpoints.up('sm')]: {
    marginRight: theme.spacing(2),
  },
}));

export const Image = styled('img')(({ theme }) => ({
  width: '100%',

  [theme.breakpoints.up('sm')]: {
    borderRadius: 10,
  },
}));
