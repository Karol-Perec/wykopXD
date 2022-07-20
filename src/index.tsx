import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ContextProvider from 'contexts/ContextProvider';
import { GlobalStyles } from '@mui/material';
import App from './App';
import { globalStyles } from './globalStyles';

const queryClient = new QueryClient();

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <QueryClientProvider client={queryClient}>
        <ContextProvider>
          <GlobalStyles styles={globalStyles} />
          <App />
        </ContextProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>
);
