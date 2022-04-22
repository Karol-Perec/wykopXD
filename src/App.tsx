import { GlobalStyles } from '@mui/material';
import { QueryClient, QueryClientProvider } from 'react-query';
import Layout from 'components/Layout/Layout';
import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary';
import { globalStyles } from 'globalStyles';
import { routes } from './Routes';
import ContextProvider from './contexts/ContextProvider';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ContextProvider>
      <GlobalStyles styles={globalStyles} />
      <Layout>
        <ErrorBoundary>{routes}</ErrorBoundary>
      </Layout>
    </ContextProvider>
  </QueryClientProvider>
);

export default App;
