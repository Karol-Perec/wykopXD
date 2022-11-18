import { styled, SwipeableDrawer } from '@mui/material';
import { grey } from '@mui/material/colors';

export const CommentsDrawer = styled(SwipeableDrawer)(({ theme }) => ({
  '.MuiPaper-root': {
    width: '100%',
    height: 700,
    maxHeight: 'calc(100% - 48px)',
    borderRadius: '10px 10px 0px 0px',

    [theme.breakpoints.up('md')]: {
      maxWidth: 600,
      height: '100%',
      maxHeight: '100%',
      borderRadius: '10px 0px 0px 10px',

      '& ::-webkit-scrollbar': {
        width: theme.spacing(1),
      },
      '& ::-webkit-scrollbar-track': {
        background: theme.palette.background.default,
      },
      '& ::-webkit-scrollbar-thumb': {
        background: theme.palette.primary.main,
      },
    },
  },
}));

export const Puller = styled('div')(({ theme }) => ({
  width: 50,
  minHeight: 6,
  margin: theme.spacing(1),
  marginLeft: 'auto',
  marginRight: 'auto',

  backgroundColor: theme.palette.mode === 'light' ? grey[400] : grey[900],
  borderRadius: 3,
}));
