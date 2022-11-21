import { styled } from '@mui/material';

export const ResponsesListContainer = styled('div')(({ theme }) => ({
  marginLeft: theme.spacing(4),
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(4),
  },
}));

export const CommentContainer = styled('div')(({ theme }) => ({
  marginBottom: theme.spacing(1),
}));

export const CommentMediaContainer = styled('div', {
  shouldForwardProp: (prop) => prop !== 'doAddMargin',
})<{
  doAddMargin?: boolean;
}>(({ theme, doAddMargin }) => ({
  marginRight: doAddMargin ? theme.spacing(1) : 0,
}));

export const Statistics = styled('div')({
  display: 'flex',
  justifyContent: 'space-evenly',
});
