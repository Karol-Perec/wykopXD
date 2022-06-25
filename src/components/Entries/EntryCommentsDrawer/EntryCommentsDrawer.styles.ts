import { alpha, styled, SwipeableDrawer } from '@mui/material';
import { grey } from '@mui/material/colors';

export const CommentsDrawer = styled(SwipeableDrawer)(({ theme }) => ({
  '.MuiPaper-root': {
    backdropFilter: 'blur(10px)',
    backgroundColor: alpha(
      theme.palette.background.default,
      theme.palette.mode === 'dark' ? 0.6 : 0.9
    ),
    '@supports not ((-webkit-backdrop-filter: none) or (backdrop-filter: none))': {
      backgroundColor: alpha(theme.palette.background.default, 0.95),
    },

    borderRadius: '10px 10px 0px 0px',

    [theme.breakpoints.up('sm')]: {
      borderRadius: '10px 0px 0px 10px',
    },
  },
}));

export const CommentsDrawerContainer = styled('div')(({ theme }) => ({
  width: '100%',
  height: 500,

  [theme.breakpoints.up('sm')]: {
    width: '100%',
    maxWidth: 700,
    height: '100%',
  },
}));

export const Puller = styled('div')(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
  borderRadius: 3,
  top: 8,
  left: 'calc(50% - 15px)',
}));
