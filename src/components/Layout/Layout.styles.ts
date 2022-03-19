import { styled } from '@mui/material';

export const Main = styled('main')(({ theme }) => ({
  minHeight: 'calc(100% - 68px)',
  backgroundColor: theme.palette.background.default,
  paddingTop: theme.spacing(2),
}));

export const Offset = styled('div')(({ theme }) => ({
  ...theme.mixins.toolbar,
  backgroundColor: theme.palette.background.default,
}));

export const MainContentContainer = styled('div')(({ theme }) => ({
  maxWidth: 700,
  marginLeft: 'auto',
  marginRight: 'auto',

  [theme.breakpoints.up('sm')]: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));
