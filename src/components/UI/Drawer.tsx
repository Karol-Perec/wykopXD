import { MouseEventHandler, PropsWithChildren } from 'react';
import { alpha, Drawer as MuiDrawer, DrawerProps as MuiDrawerProps, styled } from '@mui/material';

interface DrawerProps {
  open: boolean;
  onUserAction: MouseEventHandler;
  anchor: MuiDrawerProps['anchor'];
}

const StyledMuiDrawer = styled(MuiDrawer)(({ theme }) => ({
  '.MuiPaper-root': {
    backdropFilter: 'blur(10px)',
    backgroundColor: alpha(
      theme.palette.background.default,
      theme.palette.mode === 'dark' ? 0.7 : 0.9
    ),
    width: 200,
    '@supports not ((-webkit-backdrop-filter: none) or (backdrop-filter: none))': {
      backgroundColor: alpha(theme.palette.background.default, 0.95),
    },
  },
}));

const Drawer = ({ open, anchor, children, onUserAction }: PropsWithChildren<DrawerProps>) => (
  <StyledMuiDrawer open={open} onClose={onUserAction} anchor={anchor}>
    {children}
  </StyledMuiDrawer>
);

export default Drawer;
