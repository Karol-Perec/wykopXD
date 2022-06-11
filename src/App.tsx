import { useContext } from 'react';
import Layout from 'components/Layout/Layout';
import { Routes as RouterRoutes, Route, Navigate } from 'react-router-dom';
import { GlobalStyles } from '@mui/material';
import { HitsPeriod, MikroblogCategory } from 'types';
import Link from 'pages/Link';
import Main from 'pages/Home';
import Entry from 'pages/Entry';
import Mikroblog from 'pages/Mikroblog';
import Hits from 'pages/Hits';
import Tag from 'pages/Tag';
import Profile from 'pages/Profile';
import Upcoming from 'pages/Upcoming';
import Login from 'pages/Login';
import LoginCallback from 'pages/LoginCallback';
import Settings from 'pages/Settings';
import AppInfo from 'pages/AppInfo';
import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary';
import ScrollToTop from 'components/UI/ScrollToTop';
import AuthContext from 'contexts/Auth/AuthContext';
import { ROUTE } from './routes';
import { globalStyles } from './globalStyles';


export const renderRouterRoutes = (isLoggedIn: boolean) => (
  <RouterRoutes>
    <Route path={ROUTE.HITS} element={<Hits />}>
      {Object.values(HitsPeriod).map((period) => (
        <Route path={period} key={period} element={<Hits period={period} />} />
      ))}
    </Route>
    <Route path={ROUTE.MIKROBLOG} element={<Mikroblog />}>
      {Object.values(MikroblogCategory).map((category) => (
        <Route path={category} key={category} element={<Mikroblog category={category} />} />
      ))}
    </Route>
    <Route path={ROUTE.LINK} element={<Link />} />
    <Route path={ROUTE.ENTRY} element={<Entry />} />
    <Route path={ROUTE.TAG} element={<Tag />} />
    <Route path={ROUTE.PROFILE} element={<Profile />} />
    <Route path={ROUTE.HOME} element={<Main />} />
    <Route path={ROUTE.UPCOMING} element={<Upcoming />} />
    <Route path={ROUTE.SETTINGS} element={<Settings />} />
    <Route path={ROUTE.APP_INFO} element={<AppInfo />} />
    {!isLoggedIn && <Route path={ROUTE.LOGIN} element={<Login />} />}
    {!isLoggedIn && <Route path={ROUTE.LOGIN_CALLBACK} element={<LoginCallback />} />}
    <Route path={ROUTE.ANY} element={<Navigate to='/' />} />
  </RouterRoutes>
);

const App = () => {
  const { authData } = useContext(AuthContext);

  return (
    <ErrorBoundary>
      <ScrollToTop />
      <GlobalStyles styles={globalStyles} />
      <Layout>{renderRouterRoutes(!!authData?.userkey)}</Layout>
    </ErrorBoundary>
  );
};

export default App;
