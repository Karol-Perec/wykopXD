import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from 'components/UI/Loading';
import ErrorMessage from 'components/UI/ErrorMessage';
import useConnectUrl from 'hooks/api/useConnectUrl';
import useTitle from 'hooks/useTitle';
import AuthContext from 'contexts/Auth/AuthContext';
import { ROUTE } from 'routes';

const Login = () => {
  useTitle('Zaloguj się');
  const {
    authData: { userKey },
  } = useContext(AuthContext);
  const navigate = useNavigate();
  const { data, isLoading, error } = useConnectUrl(
    window.location.origin + ROUTE.LOGIN_CALLBACK,
    !process.env.REACT_APP_CONNECT_URL
  );
  const connectUrl = process.env.REACT_APP_CONNECT_URL || data;

  useEffect(() => {
    if (userKey) navigate('/');
  }, [userKey, navigate]);

  if (isLoading && !connectUrl) return <Loading />;
  if (error) return <ErrorMessage error={error} />;
  if (!connectUrl) return <ErrorMessage error='Błąd logowania' />;

  if (connectUrl) window.location.href = connectUrl;

  return null;

  // return <IFrame title='Wykop Connect' src={connectUrl} />;
};

export default Login;
