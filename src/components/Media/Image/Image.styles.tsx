import { styled } from '@mui/material/styles';

interface ContainerProps {
  aspectRatio?: number;
  unblockMaxHeight: boolean;
}

export const Container = styled('div', {
  shouldForwardProp: (prop) => !['aspectRatio', 'unblockMaxHeight'].includes(String(prop)),
})<ContainerProps>(({ theme, aspectRatio, unblockMaxHeight }) => ({
  display: 'flex',
  justifyContent: 'center',

  [theme.breakpoints.up('sm')]: {
    marginRight: theme.spacing(2),
  },
}));

export const Image = styled('img')(({ theme }) => ({
  borderRadius: 10,
  width: '100%',

  maxHeight: 550,
  [theme.breakpoints.up('sm')]: {
    maxHeight: 650,
  },
}));
