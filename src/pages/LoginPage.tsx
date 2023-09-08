import useConnect from '~/api/auth/useConnect';
import ErrorMessage from '~/components/UI/ErrorMessage';
import Loading from '~/components/UI/Loading';
import useTitle from '~/hooks/useTitle';

const LoginPage = () => {
  useTitle('Zaloguj się');
  const { data, isLoading, error } = useConnect();

  if (error) return <ErrorMessage error={error} />;
  if (isLoading) return <Loading />;
  if (data?.data.connect_url) {
    window.location.href = data.data.connect_url;
  }

  return null;
};

export default LoginPage;
