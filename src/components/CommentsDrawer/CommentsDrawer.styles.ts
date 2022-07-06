import { styled, SwipeableDrawer } from '@mui/material';
import { grey } from '@mui/material/colors';

export const CommentsDrawer = styled(SwipeableDrawer)(({ theme }) => ({
  '.MuiPaper-root': {
    width: '100%',
    height: 500,
    borderRadius: '10px 10px 0px 0px',

    [theme.breakpoints.up('md')]: {
      maxWidth: 500,
      height: '100%',
      borderRadius: '10px 0px 0px 10px',
    },

    // backdropFilter: 'blur(10px)',
    // backgroundColor: alpha(
    //   theme.palette.background.default,
    //   theme.palette.mode === 'dark' ? 0.7 : 0.9
    // ),
    // '@supports not ((-webkit-backdrop-filter: none) or (backdrop-filter: none))': {
    //   backgroundColor: alpha(theme.palette.background.default, 0.95),
    // },
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
  width: 50,
  minHeight: 6,
  margin: theme.spacing(1),
  marginLeft: 'auto',
  marginRight: 'auto',

  backgroundColor: theme.palette.mode === 'light' ? grey[400] : grey[900],
  borderRadius: 3,
}));
