import { styled } from '@mui/material';

export const NavContainer = styled('nav')({
  width: 230,
});

export const DrawerHeader = styled('div')(({ theme }) => ({
  textAlign: 'center',
  height: 50,
  margin: theme.spacing(2),
}));
