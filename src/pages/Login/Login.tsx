export const xd = 'xd';

// import React, { useEffect } from 'react';
// import { Route, useLocation, Redirect } from 'react-router';
// import { useSelector, useDispatch } from 'react-redux';
// import * as authActions from '../../../store/Auth/actions';
// import Spinner from '../../../components/UI/Spinner/Spinner';

// function useQuery() {
//   return new URLSearchParams(useLocation().search);
// }

// const Login = () => {
//   const connectData = useQuery().get('connectData');
//   const wykopConnectUrl = useSelector((state) => state.auth.wykopConnectUrl);
//   const loading = useSelector((state) => state.auth.loading);
//   const isAuthenticated = useSelector((state) => state.auth.token !== null);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     if (!wykopConnectUrl && !isAuthenticated && !connectData) {
//       dispatch(authActions.connect());
//     }
//   }, [dispatch]);

//   useEffect(() => {
//     if (connectData && !isAuthenticated) {
//       dispatch(authActions.authenticate(connectData));
//     }
//   }, [dispatch, connectData]);

//   let redirect = null;
//   if (wykopConnectUrl && !connectData && !isAuthenticated) {
//     redirect = (
//       <Route path='/' render={() => (window.location = wykopConnectUrl)} />
//     );
//   } else if (isAuthenticated) {
//     redirect = <Redirect to='/' />;
//   }

//   return (
//     <>
//       {redirect}
//       {loading && <Spinner />}
//     </>
//   );
// };

// export default Login;
