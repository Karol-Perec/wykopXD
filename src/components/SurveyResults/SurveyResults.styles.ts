import { styled } from '@mui/material';

export const Container = styled('div')(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.up('sm')]: {
    paddingLeft: 0,
  },
}));
