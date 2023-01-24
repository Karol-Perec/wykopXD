import { useContext } from 'react';
import { Routes, Route, Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from '~/components/Layout/Layout';
import ScrollToTop from '~/components/UI/ScrollToTop';
import AuthContext from '~/contexts/Auth/AuthContext';
import AppInfoPage from '~/pages/AppInfoPage';
import EntryPage from '~/pages/EntryPage';
import HitsPage from '~/pages/HitsPage';
import HomePage from '~/pages/HomePage';
import MainPage from '~/pages/HomePage';
import LinkPage from '~/pages/LinkPage';
import LoginCallback from '~/pages/LoginCallback';
import LoginPage from '~/pages/LoginPage';
import MikroblogPage from '~/pages/MikroblogPage';
import SettingsPage from '~/pages/SettingsPage';
import TagPage from '~/pages/TagPage';
import UpcomingPage from '~/pages/UpcomingPage';
import UserPage from '~/pages/UserPage';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import ContextProvider from './contexts/ContextProvider';
import ThemeContextProvider from './contexts/Theme/ThemeContextProvider';
import ErrorElement from './errorElement';
import { ROUTE } from './routes';
import { HitsCategory, MikroblogSort, UpcomingCategory } from './types';

// export const renderRouterRoutes = (isLoggedIn: boolean) => (
//   <Routes>
//     <Route path={ROUTE.HITS}>
//       <Route index element={<HitsPage category={HitsCategory.WEEK} />} />
//       {Object.values(HitsCategory).map((category) => (
//         <Route path={category} key={category} element={<HitsPage category={category} />}>
//           {category === HitsCategory.MONTH && (
//             <Route path=':year' element={<HitsPage category={category} />}>
//               <Route path=':month' element={<HitsPage category={category} />} />
//             </Route>
//           )}
//           {category === HitsCategory.YEAR && (
//             <Route path=':year' element={<HitsPage category={category} />} />
//           )}
//         </Route>
//       ))}
//     </Route>
//     <Route path={ROUTE.MIKROBLOG}>
//       <Route index element={<MikroblogPage category={MikroblogSort.HOT_12H} />} />
//       {Object.values(MikroblogSort).map((category) => (
//         <Route path={category} key={category} element={<MikroblogPage category={category} />} />
//       ))}
//     </Route>
//     <Route path={ROUTE.LINK} element={<LinkPage />} />
//     <Route path={ROUTE.ENTRY} element={<EntryPage />} />
//     <Route path={ROUTE.TAG} element={<TagPage />} />
//     <Route path={ROUTE.USER} element={<UserPage />} />
//     <Route path={ROUTE.HOME} element={<MainPage />} />
//     <Route path={ROUTE.UPCOMING}>
//       <Route index element={<UpcomingPage category={UpcomingCategory.VOTED} />} />
//       {Object.values(UpcomingCategory).map((category) => (
//         <Route path={category} key={category} element={<UpcomingPage category={category} />} />
//       ))}
//     </Route>
//     <Route path={ROUTE.SETTINGS} element={<SettingsPage />} />
//     <Route path={ROUTE.APP_INFO} element={<AppInfoPage />} />
//     {!isLoggedIn && <Route path={ROUTE.LOGIN} element={<LoginPage />} />}
//     {!isLoggedIn && <Route path={ROUTE.LOGIN_CALLBACK} element={<LoginCallback />} />}
//     <Route path={ROUTE.ANY} element={<Navigate to='/' />} />
//   </Routes>
// );

const App = () => (
  <ContextProvider>
    <ErrorBoundary>
      <ScrollToTop />
      <Layout />
    </ErrorBoundary>
  </ContextProvider>
);

export default App;
