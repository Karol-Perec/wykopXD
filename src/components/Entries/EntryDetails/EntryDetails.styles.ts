import { styled, Typography } from '@mui/material';

export const EntryContent = styled('div')(({ theme }) => ({
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

export const Statistics = styled('div')({
  display: 'flex',
  justifyContent: 'space-evenly',
});

export const SurveyContainer = styled('div')(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.up('sm')]: {
    paddingLeft: 0,
  },
}));
