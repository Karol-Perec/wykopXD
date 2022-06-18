import { styled } from '@mui/material';

export const ResponsesListContainer = styled('div')(({ theme }) => ({
  marginLeft: theme.spacing(4),
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(6),
  },
}));

export const CommentContainer = styled('div')(({ theme }) => ({
  marginBottom: theme.spacing(1),
}));
