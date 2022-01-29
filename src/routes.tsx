import Link from 'containers/Link/Link';
import Main from 'containers/Main/Main';
import { Routes, Route, Navigate } from 'react-router-dom';

export enum ROUTE {
  MAIN = '/',
  UPCOMING = '/wykopalisko',
  HITS = '/hity',
  MIKROBLOG = '/mikroblog',
  MY_WYKOP = '/moj',
  ANY = '*',
  LINK = '/link/:id',
}

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

    <Route path={ROUTE.MAIN} element={<Main />} />
    <Route path={ROUTE.LINK} element={<Link />} />
    <Route path={ROUTE.ANY} element={<Navigate to='/' />} />
  </Routes>
);
