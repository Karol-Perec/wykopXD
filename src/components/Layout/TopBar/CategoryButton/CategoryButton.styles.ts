import { MenuItem as MuiMenuItem, IconButton as MuiIconButton, styled } from '@mui/material';

export const MenuItem = styled(MuiMenuItem)({
  height: 42,
}) as typeof MuiMenuItem;

export const CalendarIconButton = styled(MuiIconButton)(({ theme }) => ({
  marginLeft: theme.spacing(1),
})) as typeof MuiIconButton;
