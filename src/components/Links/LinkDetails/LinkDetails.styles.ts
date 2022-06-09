import { styled, Typography } from '@mui/material';

export const LinkHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  paddingTop: theme.spacing(1.5),
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  gap: theme.spacing(1),
  alignItems: 'center'
}));

export const LinkContent = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(6),
  },
}));

export const TextContent = styled(Typography)(({ theme }) => ({
  padding: theme.spacing(1),
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