import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from 'components/UI/Loading';
import ErrorMessage from 'components/UI/ErrorMessage';
import useConnectUrl from 'hooks/api/useConnectUrl';
import AuthContext from 'contexts/Auth/AuthContext';
import { ROUTE } from 'routes';
import * as S from './Login.styles';

const Login = () => {
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();
  const { data, isLoading, error } = useConnectUrl(
    window.location.origin + ROUTE.LOGIN_CALLBACK,
    !process.env.REACT_APP_CONNECT_URL
  );
  const connectUrl = process.env.REACT_APP_CONNECT_URL || data;

  console.log(connectUrl);
  

  useEffect(() => {
    if (token) navigate('/');
  }, [token, navigate]);

  if (isLoading && !connectUrl) return <Loading />;
  if (error) return <ErrorMessage error={error} />;
  if (!connectUrl) return <ErrorMessage error='Błąd logowania' />;

  return <S.WykopLoginFrame title='Wykop Connect' src={connectUrl} />;
};

export default Login;
