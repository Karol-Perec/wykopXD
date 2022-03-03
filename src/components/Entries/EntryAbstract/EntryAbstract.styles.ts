import { Card as MuiCard, darken, lighten, styled } from '@mui/material';

export const Card = styled(MuiCard)(({ theme }) => ({
  width: '100%',
  marginBottom: theme.spacing(2),
  transition: 'background-color 0.3s ease-out 0s',
  '& a': {
    textDecoration: 'none',
  },
  ':hover': {
    cursor: 'pointer',
    backgroundColor:
      theme.palette.mode === 'dark'
        ? lighten(theme.palette.background.default, 0.05)
        : darken(theme.palette.background.default, 0.02),
  },
}));

export const UserSection = styled('div')(({ theme }) => ({
  display: 'flex',
  paddingTop: theme.spacing(1.5),
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
}));

export const ContentSection = styled('article')(({ theme }) => ({
  display: 'inline-block',
  padding: theme.spacing(1),
  textAlign: 'left',
}));
