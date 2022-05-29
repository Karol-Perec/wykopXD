import { useContext, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import Loading from 'components/UI/Loading';
import ErrorMessage from 'components/UI/ErrorMessage';
import useConnectUrl from 'hooks/api/useConnectUrl';
import AuthContext from 'contexts/Auth/AuthContext';
import { isInIframe } from 'utils/windowUtils';
import useLogin from '../../../hooks/api/useLogin';

const LoginCallback = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const connectData = useSearchParams()[0].get('connectData');

  if (isInIframe()) window.top!.location.href = window.location.href;

  // useEffect(() => {
  //   if (connectData) navigate('/');
  // }, [connectData, navigate]);

  const loading = false;

  // if (!connectData) navigate('/');
  const { data, error } = useLogin(connectData!);
  console.log('connectData');
  console.log(connectData);
  console.log('data');
  console.log(data);
  console.log('error');
  console.log(error);

  // const isAuthenticated = useSelector((state) => state.auth.token !== null);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   if (!wykopConnectUrl && !isAuthenticated && !connectData) {
  //     dispatch(authActions.connect());
  //   }
  // }, [dispatch]);

  // useEffect(() => {
  //   if (connectData && !isAuthenticated) {
  //     dispatch(authActions.authenticate(connectData));
  //   }
  // }, [dispatch, connectData]);

  const redirect = null;
  // if (wykopConnectUrl && !connectData && !isAuthenticated) {
  //   redirect = <Route path='/' render={() => (window.location = wykopConnectUrl)} />;
  // } else if (isAuthenticated) {
  //   redirect = <Redirect to='/' />;
  // }

  return <Loading />;
};

export default LoginCallback;
