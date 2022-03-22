import { Routes as RouterRoutes, Route, Navigate } from 'react-router-dom';
import Link from 'containers/Link/Link';
import Main from 'containers/Main/Main';
import Entry from 'containers/Entry/Entry';
import Mikroblog from 'containers/Mikroblog/Mikroblog';
import Hits from 'containers/Hits/Hits';
import { MikroblogCategory } from 'containers/Mikroblog/mikroblog.types';
import { HitsPeriod } from 'containers/Hits/hits.types';

export enum ROUTE {
  MAIN = '/',
  UPCOMING = '/wykopalisko',
  HITS = '/hity',
  MIKROBLOG = '/mikroblog',
  MY_WYKOP = '/moj',
  ANY = '*',
  LINK = '/link/:id',
  ENTRY = '/entry/:id',
}

export const routes = (
  <RouterRoutes>
    {/* <Route path='/login'>
      <Login />
    </Route>
    <Route path='/wykopalisko/:category(aktywne|najnowsze|wykopywane|komentowane)?'>
      <Wykopalisko />
    </Route>
    <Route path='/mikroblog/:category(aktywne|najnowsze|hot6h|hot12h|hot24h)?'>
      <Mikroblog />
    </Route> */}

    <Route path={ROUTE.HITS} element={<Hits />}>
      {Object.values(HitsPeriod).map((period) => (
        <Route path={period} key={period} element={<Hits period={period} />} />
      ))}
    </Route>
    <Route path={ROUTE.MIKROBLOG} element={<Mikroblog />}>
      {Object.values(MikroblogCategory).map((category) => (
        <Route path={category} key={category} element={<Mikroblog category={category} />} />
      ))}
    </Route>
    <Route path={ROUTE.LINK} element={<Link />} />
    <Route path={ROUTE.ENTRY} element={<Entry />} />
    <Route path={ROUTE.MAIN} element={<Main />} />
    <Route path={ROUTE.ANY} element={<Navigate to='/' />} />
  </RouterRoutes>
);
