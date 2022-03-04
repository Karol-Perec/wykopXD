import { Typography, styled } from '@mui/material';
import { ReactComponent as FeelsBadMan } from 'assets/images/feelsBadMan.svg';

const StyledContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: 'calc(100vh - 136px)',
  color: theme.palette.text.primary,
}));

interface ErrorMessageProps {
  error: unknown;
}

const ErrorMessage = ({ error }: ErrorMessageProps) => (
  <StyledContainer>
    <FeelsBadMan width={120} />
    <Typography variant='h6'>
      {error instanceof Error ? error.message : JSON.stringify(error)}
    </Typography>
  </StyledContainer>
);

export default ErrorMessage;
