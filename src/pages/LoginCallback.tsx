import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import useLogin from '~/api/auth/useLogin';
import ErrorMessage from '~/components/UI/ErrorMessage';
import Loading from '~/components/UI/Loading';

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
