import { styled } from '@mui/material';

export const Container = styled('div')(({ theme }) => ({
  maxWidth: theme.breakpoints.values.md,
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    padding: 0,
  },
}));
