import Layout from '~/components/Layout/Layout';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import ContextProvider from './contexts/ContextProvider';
import useScrollToTop from './hooks/useScrollToTop';
import useWakeLock from './hooks/useWakeLock';

const App = () => {
  useWakeLock();
  useScrollToTop();

  return (
    <ContextProvider>
      <ErrorBoundary>
        <Layout />
      </ErrorBoundary>
    </ContextProvider>
  );
};

export default App;
