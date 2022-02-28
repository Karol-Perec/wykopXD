import { styled } from '@mui/material';

export const Main = styled('main')(({ theme }) => ({
  paddingTop: 68,
  minHeight: 'calc(100% - 68px)',
  backgroundColor: theme.palette.background.default,
}));
