import { alpha, Divider, Drawer, useTheme } from '@mui/material';
import { MouseEventHandler } from 'react';
import Avatar from '../../UI/Avatar';
import * as S from './RightDrawer.styles';

interface LeftDrawerProps {
  open: boolean;
  handleToggleDrawer: MouseEventHandler;
}

const LeftDrawer = ({ open, handleToggleDrawer }: LeftDrawerProps) => {
  const theme = useTheme();

  return (
    <Drawer
      open={open}
      onClose={handleToggleDrawer}
      PaperProps={{
        style: {
          backdropFilter: 'blur(10px)',
          backgroundColor: alpha(theme.palette.background.default, 0.6),
          width: 200,
        },
      }}
      anchor='right'
    >
      <S.DrawerHeader>
        <Avatar src={undefined} size={50} />
      </S.DrawerHeader>
      <Divider variant='middle' />
      xD
      <Divider variant='middle' />
    </Drawer>
  );
};

export default LeftDrawer;
