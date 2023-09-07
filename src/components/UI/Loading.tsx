import { CircularProgress, styled } from '@mui/material';
import { RefCallback } from 'react';

const LoadingContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: theme.spacing(2),
  height: '100%'
}));

interface LoadingProps {
  containerRef?: RefCallback<HTMLElement>;
}

const Loading = ({ containerRef }: LoadingProps) => (
  <LoadingContainer ref={containerRef}>
    <CircularProgress size={80} />
  </LoadingContainer>
);

export default Loading;
