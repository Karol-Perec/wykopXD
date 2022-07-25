import { useContext, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import Loading from 'components/UI/Loading';
import AuthContext from 'contexts/Auth/AuthContext';
import useLogin from 'hooks/api/useLogin';

const LoginCallback = () => {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();
  const connectData = useSearchParams()[0].get('connectData');

  const { mutate: login, isLoading } = useLogin((data) => {
    authContext.saveAuthData(data);
    navigate('/');
  });

  useEffect(() => {
    if (connectData) login(connectData);
  }, [connectData, login]);

  if (isLoading && !connectData) return <Loading />;

  return null;
};

export default LoginCallback;
