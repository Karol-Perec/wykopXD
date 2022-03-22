import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from 'components/UI/ScrollToTop';
import App from './App';

ReactDOM.render(
  <StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root')
);
