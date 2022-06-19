import { styled, Tab } from '@mui/material';

export const NavLinkTab = styled(Tab)(({ theme }) => ({
  color: 'white',
  textTransform: 'none',
  fontWeight: theme.typography.fontWeightBold,
  '&:hover': {
    color: theme.palette.primary.main,
  },
  '&.Mui-selected': {
    color: theme.palette.primary[theme.palette.mode === 'dark' ? 'main' : 'light'],
  },
  // '&.Mui-focusVisible': {
  //   backgroundColor: '#d1eaff',
  // },
})) as typeof Tab;
