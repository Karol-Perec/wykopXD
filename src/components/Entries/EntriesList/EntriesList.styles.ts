import { styled } from '@mui/material';

export const Container = styled('div')(({ theme }) => ({
  maxWidth: 700,
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    padding: 0,
  },
}));
