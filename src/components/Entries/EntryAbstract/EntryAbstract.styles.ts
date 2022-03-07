import { Card as MuiCard, darken, lighten, styled, Typography } from '@mui/material';

export const Card = styled(MuiCard)(({ theme }) => ({
  width: '100%',
  marginBottom: theme.spacing(2),
  transition: 'background-color 0.3s ease-out 0s',
  ':hover': {
    cursor: 'pointer',
    backgroundColor:
      theme.palette.mode === 'dark'
        ? lighten(theme.palette.background.default, 0.05)
        : darken(theme.palette.background.default, 0.02),
  },
  [theme.breakpoints.down('sm')]: {
    borderRadius: 0,
  },
}));

export const EntryHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  paddingTop: theme.spacing(1.5),
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
}));

export const EntryHeaderMeta = styled('div')(({ theme }) => ({
  marginLeft: theme.spacing(1.5),
}));

export const EntryContent = styled(Typography)(({ theme }) => ({
  marginLeft: theme.spacing(8.5),
  [theme.breakpoints.down('sm')]: {
    borderRadius: 0,
    marginLeft: 0,
  },
}));

export const TextContent = styled(Typography)(({ theme }) => ({
  padding: theme.spacing(1),
  paddingLeft: 0,
  [theme.breakpoints.down('sm')]: {
    paddingLeft: theme.spacing(1),
  },
}));
