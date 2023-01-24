import { styled } from '@mui/material';

export const Main = styled('main')(({ theme }) => ({
  boxSizing: 'border-box',
  minHeight: '100%',
  paddingTop: theme.spacing(6),
  backgroundColor: theme.palette.background.default,
  paddingBottom: theme.spacing(2),
  transition: 'background-color 0.3s ease-out 0s',
}));
