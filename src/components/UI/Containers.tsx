import { Card as MuiCard, darken, lighten, styled, Typography } from '@mui/material';

export const Card = styled(MuiCard, { shouldForwardProp: (prop) => prop !== 'listMode' && prop !== 'centered' })<{
  listMode?: boolean;
  centered?: boolean;
}>(({ theme, listMode, centered }) => ({
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
  ...(centered && {
    textAlign: 'center',
  }),
  [theme.breakpoints.down('sm')]: {
    borderRadius: 0,
  },
}));

export const ContentContainer = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(1),
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(6),
  },
}));

export const TextContainer = styled(Typography)(({ theme }) => ({
  padding: theme.spacing(1),
  paddingTop: 0,
  [theme.breakpoints.up('sm')]: {
    paddingLeft: 0,
  },
}));

export const MainContentContainer = styled('div')(({ theme }) => ({
  maxWidth: 800,
  paddingTop: theme.spacing(2),
  marginLeft: 'auto',
  marginRight: 'auto',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),

  [theme.breakpoints.up('sm')]: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));
