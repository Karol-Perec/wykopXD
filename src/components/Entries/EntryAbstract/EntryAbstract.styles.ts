import { Card, styled } from '@mui/material';

export const CardContainer = styled(Card)(({ theme }) => ({
  width: '100%',
  maxWidth: 800,
  marginBottom: theme.spacing(2),
  display: 'flex',
}));

export const AvatarContainer = styled('div')(({ theme }) => ({
  display: 'inline-block',
  padding: theme.spacing(1),
}));

export const ContentContainer = styled('article')(({ theme }) => ({
  display: 'inline-block',
  padding: theme.spacing(1),
  textAlign: 'left',
}));
