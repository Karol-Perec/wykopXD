import { styled } from '@mui/material';

export const CommentHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  paddingTop: theme.spacing(1.5),
  paddingRight: theme.spacing(2),
}));

export const CommentHeaderMeta = styled('div')(({ theme }) => ({
  marginLeft: theme.spacing(1.5),
  height: 40,
}));

export const CommentContent = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(8.5),
  },
}));