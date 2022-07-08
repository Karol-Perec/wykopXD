import { useContext } from 'react';
import { Routes as RouterRoutes, Route, Navigate } from 'react-router-dom';
import { HitsPeriod, MikroblogCategory } from 'types';
import LinkPage from 'pages/LinkPage';
import MainPage from 'pages/HomePage';
import EntryPage from 'pages/EntryPage';
import MikroblogPage from 'pages/MikroblogPage';
import HitsPage from 'pages/HitsPage';
import TagPage from 'pages/TagPage';
import ProfilePage from 'pages/ProfilePage';
import UpcomingPage, { upcomingSortOptions } from 'pages/UpcomingPage';
import LoginPage from 'pages/LoginPage';
import LoginCallback from 'pages/LoginCallback';
import SettingsPage from 'pages/SettingsPage';
import AppInfoPage from 'pages/AppInfoPage';
import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary';
import ScrollToTop from 'components/UI/ScrollToTop';
import AuthContext from 'contexts/Auth/AuthContext';
import Layout from 'components/Layout/Layout';
import { ROUTE } from './routes';

export const renderRouterRoutes = (isLoggedIn: boolean) => (
  <RouterRoutes>
    <Route path={ROUTE.HITS} element={<HitsPage />}>
      {Object.values(HitsPeriod).map((period) => (
        <Route path=':filter' key={period} element={<HitsPage />}>
          <Route path=':year' element={<HitsPage />}>
            <Route path=':month' element={<HitsPage />} />
          </Route>
        </Route>
      ))}
    </Route>
    <Route path={ROUTE.MIKROBLOG} element={<MikroblogPage />}>
      <Route path=':sort' element={<MikroblogPage />} />
    </Route>
    <Route path={ROUTE.LINK} element={<LinkPage />} />
    <Route path={ROUTE.ENTRY} element={<EntryPage />} />
    <Route path={ROUTE.TAG} element={<TagPage />} />
    <Route path={ROUTE.PROFILE} element={<ProfilePage />} />
    <Route path={ROUTE.HOME} element={<MainPage />} />
    <Route path={ROUTE.UPCOMING} element={<UpcomingPage />}>
      <Route path=':sort' element={<UpcomingPage />} />
    </Route>
    <Route path={ROUTE.SETTINGS} element={<SettingsPage />} />
    <Route path={ROUTE.APP_INFO} element={<AppInfoPage />} />
    {!isLoggedIn && <Route path={ROUTE.LOGIN} element={<LoginPage />} />}
    {!isLoggedIn && <Route path={ROUTE.LOGIN_CALLBACK} element={<LoginCallback />} />}
    <Route path={ROUTE.ANY} element={<Navigate to='/' />} />
  </RouterRoutes>
);

const App = () => {
  const { authData } = useContext(AuthContext);

  return (
    <ErrorBoundary>
      <ScrollToTop />
      <Layout>{renderRouterRoutes(!!authData?.userkey)}</Layout>
    </ErrorBoundary>
  );
};

export default App;
