import { Routes, Route, Navigate } from 'react-router-dom';
import Link from 'containers/Link/Link';
import Main from 'containers/Main/Main';
import Entry from './containers/Entry/Entry';
import Mikroblog, { MikroblogCategory } from './containers/Mikroblog/Mikroblog';

export enum ROUTE {
  MAIN = '/',
  UPCOMING = '/wykopalisko',
  HITS = '/hity',
  MIKROBLOG = '/mikroblog',
  MY_WYKOP = '/moj',
  ANY = '*',
  LINK = '/link/:id',
  ENTRY = '/link/:id',
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
    </Route> */}

    <Route path={ROUTE.MIKROBLOG} element={<Mikroblog />}>
      {Object.values(MikroblogCategory).map((category) => (
        <Route path={category} element={<Mikroblog category={category} key={category} />} />
      ))}
    </Route>
    <Route path={ROUTE.LINK} element={<Link />} />
    <Route path={ROUTE.ENTRY} element={<Entry />} />
    <Route path={ROUTE.MAIN} element={<Main />} />
    <Route path={ROUTE.ANY} element={<Navigate to='/' />} />
  </Routes>
);
