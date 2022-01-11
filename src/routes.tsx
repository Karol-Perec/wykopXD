import { Routes, Route, Navigate } from 'react-router-dom';
import { Main } from './containers/Main/Main';

export const routes = (
  <Routes>
    {/* <Route path='/login'>
      <Login />
    </Route>
    <Route path='/hity/:category(dnia|tygodnia|miesiaca|roku)?'>
      <Hits />
    </Route>
    <Route path='/wykopalisko/:category(aktywne|najnowsze|wykopywane|komentowane)?'>
      <Wykopalisko />
    </Route>
    <Route path='/mikroblog/:category(aktywne|najnowsze|hot6h|hot12h|hot24h)?'>
      <Mikroblog />
    </Route>
    <Route path='/link/:id(\d+)'>
      <Link />
    </Route> */}

    <Route path='/' element={<Main />} />
    <Route path='*' element={<Navigate to='/' />} />
  </Routes>
);
