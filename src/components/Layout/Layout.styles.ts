import { styled } from '@mui/material';

export const Main = styled('main')(({ theme }) => ({
  boxSizing: 'border-box',
  minHeight: 'calc(100% - 72px)',
  backgroundColor: theme.palette.background.default,
  paddingBottom: theme.spacing(2),
  transition: 'background-color 0.3s ease-out 0s',
}));

export const Offset = styled('div')(({ theme }) => ({
  height: theme.spacing(6),
}));
