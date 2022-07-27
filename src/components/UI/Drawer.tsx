import { Drawer as MuiDrawer, DrawerProps as MuiDrawerProps } from '@mui/material';
import { MouseEventHandler, PropsWithChildren } from 'react';

interface DrawerProps {
  open: boolean;
  onUserAction: MouseEventHandler;
  anchor: MuiDrawerProps['anchor'];
}

const Drawer = ({ open, anchor, children, onUserAction }: PropsWithChildren<DrawerProps>) => (
  <MuiDrawer
    open={open}
    onClose={onUserAction}
    anchor={anchor}
    keepMounted
    PaperProps={{ style: { width: 220 } }}
  >
    {children}
  </MuiDrawer>
);

export default Drawer;
