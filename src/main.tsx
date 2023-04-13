import { GlobalStyles } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import App from './App';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import ErrorElement from './errorElement';
import { globalStyles } from './globalStyles';
import AppInfoPage from './pages/AppInfoPage';
import EntryPage from './pages/EntryPage';
import HitsPage from './pages/HitsPage';
import HomePage from './pages/HomePage';
import LinkPage from './pages/LinkPage';
import MikroblogPage from './pages/MikroblogPage';
import SettingsPage from './pages/SettingsPage';
import TagPage from './pages/TagPage';
import UpcomingPage from './pages/UpcomingPage';
import { Route } from './routes';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <ErrorElement />,
    children: [
      { path: `${Route.HOME}/:sort?`, element: <HomePage /> },
      { path: `${Route.UPCOMING}/:sort?`, element: <UpcomingPage /> },
      { path: `${Route.HITS}/:sort?/:year?/:month?`, element: <HitsPage /> },
      { path: `${Route.MIKROBLOG}/:sort?/:lastUpdate?`, element: <MikroblogPage /> },
      { path: `${Route.LINK}/:id/:slug?`, element: <LinkPage /> },
      { path: `${Route.ENTRY}/:id/:slug?`, element: <EntryPage /> },
      { path: `${Route.TAG}/:tag`, element: <TagPage /> },
      { path: Route.SETTINGS, element: <SettingsPage /> },
      { path: Route.APP_INFO, element: <AppInfoPage /> },
      { path: Route.ANY, element: <Navigate to={Route.HOME} /> },
    ],
  },
]);

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <GlobalStyles styles={globalStyles} />
      <ErrorBoundary>
        <RouterProvider router={router} />
      </ErrorBoundary>
    </QueryClientProvider>
  </StrictMode>
);
