import { useInfiniteQuery } from '@tanstack/react-query';
import { Link, WykopCollection } from '~/types';
import axios from '~/utils/axios';
import { defaultQueryOptions } from './defaultQueryOptions';

type LinksType = 'homepage' | 'upcoming' | 'observed';

type HomePageSort = 'active' | 'newest';
type UpcomingSort = HomePageSort | 'digged' | 'commented';

const useLinks = (type: LinksType, sort?: string) =>
  useInfiniteQuery({
    queryKey: ['links', type, sort],
    queryFn: ({ pageParam = 1 }) =>
      axios
        .get<WykopCollection<Link>>('/links', { params: { page: pageParam, sort } })
        .then((d) => d.data),
    getNextPageParam: (_, pages) => pages.length + 1,
    ...defaultQueryOptions,
  });

export default useLinks;
