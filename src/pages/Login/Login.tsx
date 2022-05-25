import { useEffect } from 'react';
import Loading from 'components/UI/Loading';
import ErrorMessage from '../../components/UI/ErrorMessage';
import useConnectUrl from '../../hooks/api/useConnectUrl';

const Login = () => {
  const { data, isLoading, error } = useConnectUrl(window.location.href, !!process.env.PUBLIC_URL);
  const connectUrl = process.env.CONNECT_URL || data;

  if (connectUrl) window.location.href = connectUrl;

  if (isLoading) return <Loading />;
  if (error) return <ErrorMessage error={error} />;
  if (!data) return <ErrorMessage error='Błąd logowania' />;

  const loading = false;
  // const connectData = useQuery().get('connectData');
  // const wykopConnectUrl = useSelector((state) => state.auth.wykopConnectUrl);
  // const loading = useSelector((state) => state.auth.loading);
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

  return (
    <>
      {redirect}
      {loading && <Loading />}
    </>
  );
};

export default Login;
