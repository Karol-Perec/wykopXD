import { useInfiniteQuery } from '@tanstack/react-query';
import { Entry, Link, WykopCollection } from '~/types';
import axios from '~/utils/axios';
import { defaultQueryOptions } from './defaultQueryOptions';

type LinksTypeParam = 'homepage' | 'upcoming' | 'observed';

export type HomePageSortParam = 'active' | 'newest';
export type UpcomingSortParam = HomePageSortParam | 'digged' | 'commented';

const useLinks = (type: LinksTypeParam, sort?: HomePageSortParam | UpcomingSortParam) =>
  useInfiniteQuery({
    queryKey: ['links', type, sort],
    queryFn: ({ pageParam = 1 }) =>
      axios
        .get<WykopCollection<Link | Entry>>('/links', { params: { page: pageParam, sort, type } })
        .then((d) => d.data),
    getNextPageParam: (_, pages) => pages.length + 1,
    ...defaultQueryOptions,
  });

export default useLinks;
