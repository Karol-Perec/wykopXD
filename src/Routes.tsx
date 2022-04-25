import { Routes as RouterRoutes, Route, Navigate } from 'react-router-dom';
import Link from 'pages/Link/Link';
import Main from 'pages/Home/Home';
import Entry from 'pages/Entry/Entry';
import Mikroblog from 'pages/Mikroblog/Mikroblog';
import Hits from 'pages/Hits/Hits';
import { MikroblogCategory } from 'pages/Mikroblog/mikroblog.types';
import { HitsPeriod } from 'pages/Hits/hits.types';

export enum NavRoute {
  HOME = '/',
  UPCOMING = '/wykopalisko',
  HITS = '/hity',
  MIKROBLOG = '/mikroblog',
  MY_WYKOP = '/moj',
  ANY = '*',
  LINK = '/link/:id',
  ENTRY = '/wpis/:id',
}

export const routes = (
  <RouterRoutes>
    <Route path={NavRoute.HITS} element={<Hits />}>
      {Object.values(HitsPeriod).map((period) => (
        <Route path={period} key={period} element={<Hits period={period} />} />
      ))}
    </Route>
    <Route path={NavRoute.MIKROBLOG} element={<Mikroblog />}>
      {Object.values(MikroblogCategory).map((category) => (
        <Route path={category} key={category} element={<Mikroblog category={category} />} />
      ))}
    </Route>
    <Route path={NavRoute.LINK} element={<Link />} />
    <Route path={NavRoute.ENTRY} element={<Entry />} />
    <Route path={NavRoute.HOME} element={<Main />} />
    <Route path={NavRoute.ANY} element={<Navigate to='/' />} />
  </RouterRoutes>
);
