import { styled } from '@mui/material';

export const SortingContainer = styled('div')(({ theme }) => ({
  margin: theme.spacing(1),
  display: 'flex',
  gap: theme.spacing(1),
  justifyContent: 'center',
}));
