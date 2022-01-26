import { styled } from '@mui/material';

export const Main = styled('main')(({ theme }) => ({
  boxSizing: 'border-box',
  height: 'calc(100% - 56px)',

  padding: theme.spacing(2),
  marginTop: 56,
  textAlign: 'center',
  backgroundColor: theme.palette.background.default,
  overflowX: 'scroll',
}));
