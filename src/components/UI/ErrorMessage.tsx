import { Typography, styled, Button } from '@mui/material';
import { ReactComponent as FeelsBadMan } from 'assets/images/feelsBadMan.svg';

const StyledContainer = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  display: 'flex',
  gap: theme.spacing(1),
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: 'calc(100vh - 136px)',
  color: theme.palette.text.primary,
  transition: 'background-color 0.3s ease-out 0s',
}));

const renderError = (error: unknown) => {
  if (error instanceof Error) return error.message;
  if (typeof error === 'string') return error;
  return JSON.stringify(error);
};

interface ErrorMessageProps {
  error: unknown;
}

const ErrorMessage = ({ error }: ErrorMessageProps) => (
  <StyledContainer>
    <FeelsBadMan width={150} />
    <Typography variant='h6'>Błąd: {renderError(error)}</Typography>
    <Button href='/' variant='outlined'>
      Powrót na stronę główną
    </Button>
  </StyledContainer>
);

export default ErrorMessage;
