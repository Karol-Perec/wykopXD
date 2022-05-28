import { GlobalStyles } from '@mui/material';
import { QueryClient, QueryClientProvider } from 'react-query';
import Layout from 'components/Layout/Layout';
import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary';
import { globalStyles } from 'globalStyles';
import { Routes as RouterRoutes, Route, Navigate } from 'react-router-dom';
import Link from 'pages/Link/Link';
import Main from 'pages/Home/Home';
import Entry from 'pages/Entry/Entry';
import Mikroblog from 'pages/Mikroblog/Mikroblog';
import Hits from 'pages/Hits/Hits';
import { MikroblogCategory } from 'pages/Mikroblog/mikroblog.types';
import { HitsPeriod } from 'pages/Hits/hits.types';
import Tag from 'pages/Tag/Tag';
import Profile from 'pages/Profile/Profile';
import Upcoming from 'pages/Upcoming/Upcoming';
import Login from 'pages/Auth/Login/Login';
import ContextProvider from './contexts/ContextProvider';
import { ROUTE } from './routes';
import LoginCallback from './pages/Auth/LoginCallback/LoginCallback';

const queryClient = new QueryClient();

export const routerRoutes = (
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
    <Route path={ROUTE.LOGIN} element={<Login />} />
    <Route path={ROUTE.LOGIN_CALLBACK} element={<LoginCallback />} />
    <Route path={ROUTE.ANY} element={<Navigate to='/' />} />
  </RouterRoutes>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ContextProvider>
      <GlobalStyles styles={globalStyles} />
      <Layout>
        <ErrorBoundary>{routerRoutes}</ErrorBoundary>
      </Layout>
    </ContextProvider>
  </QueryClientProvider>
);

export default App;
