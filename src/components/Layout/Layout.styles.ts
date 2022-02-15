import { styled } from '@mui/material';

export const Main = styled('main')(({ theme }) => ({
  paddingTop: 68,
  minHeight: 'calc(100% - 68px)',
  textAlign: 'center',
  backgroundColor: theme.palette.background.default,
}));
