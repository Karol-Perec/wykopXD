import { Theme } from '@mui/material';

export const globalStyles = (theme: Theme) => ({
  '&::-webkit-scrollbar': {
    width: '0.4em',
    height: '100%',
  },
  '&::-webkit-scrollbar-track': {
    boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
    webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: theme.palette.primary.main,
  },
  'html, body, #root': {
    height: '100%',
  },
});
