import { styled, Typography } from '@mui/material';

export const EntryHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  paddingTop: theme.spacing(1.5),
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
}));

export const EntryHeaderMeta = styled('div')(({ theme }) => ({
  marginLeft: theme.spacing(1.5),
  height: 40,
}));

export const EntryContent = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(8.5),
  },
}));

export const TextContent = styled(Typography)(({ theme }) => ({
  padding: theme.spacing(2),
  paddingLeft: theme.spacing(1),
  paddingRight: theme.spacing(1),
  [theme.breakpoints.up('sm')]: {
    paddingLeft: 0,
  },
}));

export const Statistics = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-evenly',
  margin: theme.spacing(1),
}));
