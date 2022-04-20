import { Card as MuiCard, darken, lighten, styled, Typography } from '@mui/material';

export const Card = styled(MuiCard, { shouldForwardProp: (prop) => prop !== 'listMode' })<{
  listMode?: boolean;
}>(({ theme, listMode }) => ({
  width: '100%',
  marginBottom: theme.spacing(2),
  WebkitTapHighlightColor: 'transparent',
  transition: 'background-color 0.3s ease-out 0s',
  ...(listMode && {
    ':hover': {
      cursor: 'pointer',
      backgroundColor:
        theme.palette.mode === 'dark'
          ? lighten(theme.palette.background.default, 0.05)
          : darken(theme.palette.background.default, 0.02),
    },
  }),
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
