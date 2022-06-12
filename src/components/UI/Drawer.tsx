import { MouseEventHandler, PropsWithChildren } from 'react';
import { alpha, Drawer as MuiDrawer, useTheme, DrawerProps as MuiDrawerProps } from '@mui/material';

interface DrawerProps {
  open: boolean;
  onUserAction: MouseEventHandler;
  anchor: MuiDrawerProps['anchor'];
}

const Drawer = ({ open, anchor, children, onUserAction }: PropsWithChildren<DrawerProps>) => {
  const theme = useTheme();

  return (
    <MuiDrawer
      open={open}
      onClose={onUserAction}
      PaperProps={{
        style: {
          backdropFilter: 'blur(10px)',
          backgroundColor: alpha(
            theme.palette.background.default,
            theme.palette.mode === 'dark' ? 0.6 : 0.8
          ),
          width: 200,
        },
      }}
      anchor={anchor}
    >
      {children}
    </MuiDrawer>
  );
};

export default Drawer;
