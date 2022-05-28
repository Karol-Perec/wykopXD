import { styled } from '@mui/material';

export const WykopLoginFrame = styled('iframe')(({ theme }) => ({
  height: 'calc(100vh - 100px)',
  maxHeight: 870,
  width: '100%',
  padding: 0,
  margin: 0,
  border: 'none',
  boxShadow: `0px 2px 1px -1px rgb(0 0 0 / 20%), 
              0px 1px 1px 0px rgb(0 0 0 / 14%), 
              0px 1px 3px 0px rgb(0 0 0 / 12%)`,
  [theme.breakpoints.up('sm')]: {
    height: 'calc(100vh - 300px)',
    maxHeight: 770,
    borderRadius: 4,
  },
}));
