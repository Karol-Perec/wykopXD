import { GlobalStyles } from '@mui/material';
import { QueryClient, QueryClientProvider } from 'react-query';
import Layout from 'components/Layout/Layout';
import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary';
import ThemeContextProvider from 'contexts/ThemeContextProvider';
import { globalStyles } from 'globalStyles';
import { routes } from './Routes';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeContextProvider>
      <GlobalStyles styles={globalStyles} />
      <Layout>
        <ErrorBoundary>{routes}</ErrorBoundary>
      </Layout>
    </ThemeContextProvider>
  </QueryClientProvider>
);

export default App;
