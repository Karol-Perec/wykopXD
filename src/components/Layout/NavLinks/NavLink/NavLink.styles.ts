import { styled, Tab } from '@mui/material';

export const NavLinkTab = styled(Tab)(({ theme }) => ({
  color: '#fff',
  textTransform: 'none',
  fontWeight: theme.typography.fontWeightBold,
  '&:hover': {
    color: theme.palette.primary.main,
  },
  '&.Mui-selected': {
    color: theme.palette.mode === 'dark' ? theme.palette.primary.main : '#fff',
  },
})) as typeof Tab;
