import { styled } from '@mui/material';

export const CommentsListContainer = styled('div')(({ theme }) => ({
  marginLeft: theme.spacing(4),
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(6),
  },
}));

export const SortingContainer = styled('div')(({ theme }) => ({
  margin: theme.spacing(1),
  display: 'flex',
  gap: theme.spacing(1),
  justifyContent: 'center',
}));
