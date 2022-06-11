import { styled } from '@mui/material';

export const CommentHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  paddingTop: theme.spacing(1.5),
  paddingRight: theme.spacing(2),
  gap: theme.spacing(1),
  alignItems: 'center'
}));

export const CommentContent = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(8.5),
  },
}));
