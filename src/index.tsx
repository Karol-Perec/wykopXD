import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from 'components/UI/ScrollToTop';
import App from './App';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </StrictMode>
);
