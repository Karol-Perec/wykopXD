import { CircularProgress, styled } from '@mui/material';

const LoadingContainer = styled('div')(({ theme }) => ({
  textAlign: 'center',
  margin: theme.spacing(2),
}));

const Loading = () => (
  <LoadingContainer>
    <CircularProgress size={80} />
  </LoadingContainer>
);

export default Loading;
