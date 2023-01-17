import { GlobalStyles } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import ContextProvider from '~/contexts/ContextProvider';
import App from './App';
import { globalStyles } from './globalStyles';

const queryClient = new QueryClient();

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.PUBLIC_URL}>
      <QueryClientProvider client={queryClient}>
        <ContextProvider>
          <GlobalStyles styles={globalStyles} />
          <App />
        </ContextProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>
);
