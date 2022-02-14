import { GlobalStyles } from '@mui/material';
import Layout from 'components/Layout/Layout';
import ThemeContextProvider from 'contexts/ThemeContextProvider';
import { globalStyles } from 'globalStyles';
import { QueryClient, QueryClientProvider } from 'react-query';
import { routes } from 'routes';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeContextProvider>
      <GlobalStyles styles={globalStyles} />
      <Layout>{routes}</Layout>
    </ThemeContextProvider>
  </QueryClientProvider>
);

export default App;
