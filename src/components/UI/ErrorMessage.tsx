import { Typography, styled, Button } from '@mui/material';
import { AxiosError } from 'axios';
import { ReactComponent as FeelsBadMan } from '~/assets/images/feelsBadMan.svg';

const StyledContainer = styled('div')(({ theme }) => ({
  boxSizing: 'border-box',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: theme.spacing(1),
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  transition: 'background-color 0.3s ease-out 0s',
  paddingBottom: theme.spacing(10),
}));

const renderError = (error: unknown) => {
  if (error instanceof AxiosError) return error.message || error.response?.data?.message;
  if (error instanceof Error) return error.message;
  if (typeof error === 'string') return error;

  return JSON.stringify(error);
};

interface ErrorMessageProps {
  error: unknown;
}

const ErrorMessage = ({ error }: ErrorMessageProps) => (
  <StyledContainer>
    <FeelsBadMan width={150} style={{ marginLeft: 24 }} />

    <Typography variant='h6' textAlign='center'>
      Błąd: {renderError(error)}
    </Typography>

    <Button href='/' variant='outlined'>
      Powrót na stronę główną
    </Button>
  </StyledContainer>
);

export default ErrorMessage;
