import Layout from '~/components/Layout/Layout';
import ScrollToTop from '~/components/UI/ScrollToTop';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import ContextProvider from './contexts/ContextProvider';

const App = () => (
  <ContextProvider>
    <ErrorBoundary>
      <ScrollToTop />
      <Layout />
    </ErrorBoundary>
  </ContextProvider>
);

export default App;
