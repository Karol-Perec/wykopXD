import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ErrorMessage from '~/components/UI/ErrorMessage';
import Loading from '~/components/UI/Loading';
import AuthContext from '~/contexts/Auth/AuthContext';
import useConnectUrl from '~/hooks/api/useConnectUrl';
import useTitle from '~/hooks/useTitle';
import { ROUTE } from '~/routes';

const LoginPage = () => {
  useTitle('Zaloguj się');
  const { authData } = useContext(AuthContext);
  const navigate = useNavigate();
  const { data, isLoading, error } = useConnectUrl(
    window.location.origin + ROUTE.LOGIN_CALLBACK,
    !import.meta.env.REACT_APP_CONNECT_URL
  );
  const connectUrl = import.meta.env.REACT_APP_CONNECT_URL || data;

  useEffect(() => {
    if (authData?.userkey) navigate('/');
  }, [navigate, authData?.userkey]);

  if (error) return <ErrorMessage error={error} />;
  if (isLoading && !connectUrl) return <Loading />;
  if (connectUrl) window.location.href = connectUrl;

  return null;
};

export default LoginPage;
