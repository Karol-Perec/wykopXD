import { MenuItem as MuiMenuItem, IconButton as MuiIconButton, styled } from '@mui/material';

export const MenuItem = styled(MuiMenuItem)({
  height: 42,
  width: 130,
}) as typeof MuiMenuItem;

export const IconButton = styled(MuiIconButton)(({ theme }) => ({
  marginRight: theme.spacing(1),
}));
