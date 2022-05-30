import { styled } from '@mui/material';

export const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(1),
  margin: theme.spacing(2),
}));

export const NavContainer = styled('nav')({
  width: 230,
});
