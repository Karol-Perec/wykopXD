import { useContext, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import ErrorMessage from '~/components/UI/ErrorMessage';
import Loading from '~/components/UI/Loading';
import AuthContext from '~/contexts/Auth/AuthContext';
import useLogin from '~/api/useLogin';

const LoginCallback = () => {

  const connectData = useSearchParams()[0].get('connectData');

  const { mutate: login, isLoading, error } = useLogin();

  useEffect(() => {
    if (connectData) login(connectData);
  }, [connectData, login]);

  if (error) return <ErrorMessage error={error} />;
  if (isLoading && !connectData) return <Loading />;

  return null;
};

export default LoginCallback;
