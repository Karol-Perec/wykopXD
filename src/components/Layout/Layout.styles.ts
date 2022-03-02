import { styled } from '@mui/material';

export const Main = styled('main')(({ theme }) => ({
  minHeight: 'calc(100% - 68px)',
  backgroundColor: theme.palette.background.default,
  paddingTop: theme.spacing(2),
}));

export const Offset = styled('div')(({ theme }) => ({
  ...theme.mixins.toolbar,
  backgroundColor: theme.palette.background.default,
}));
