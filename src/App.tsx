import { ThemeProvider, GlobalStyles } from '@mui/material';
import { QueryClient, QueryClientProvider } from 'react-query';
import { routes } from './routes';
import { Layout } from './components/Layout/Layout';
import { theme } from './theme';
import { globalStyles } from './globalStyles';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyles styles={globalStyles} />
        <Layout>{routes}</Layout>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
