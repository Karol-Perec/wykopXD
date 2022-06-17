import { CircularProgress, styled } from '@mui/material';
import { RefCallback } from 'react';

const LoadingContainer = styled('div')(({ theme }) => ({
  textAlign: 'center',
  margin: theme.spacing(2),
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
