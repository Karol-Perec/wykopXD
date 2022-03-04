import { GlobalStyles } from '@mui/material';
import Layout from 'components/Layout/Layout';
import ThemeContextProvider from 'contexts/ThemeContextProvider';
import { globalStyles } from 'globalStyles';
import { QueryClient, QueryClientProvider } from 'react-query';
import { routes } from 'Routes';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

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
