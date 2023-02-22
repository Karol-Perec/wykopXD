import { useInfiniteQuery } from '@tanstack/react-query';
import { Link, WykopCollection } from '~/types';
import axios from '~/utils/axios';
import { defaultQueryOptions } from './defaultQueryOptions';

type LinksType = 'homepage' | 'upcoming' | 'observed';

export type HomePageLinksSort = 'active' | 'newest';
type UpcomingSort = HomePageLinksSort | 'digged' | 'commented';

const useLinks = (type: LinksType, sort?: HomePageLinksSort) =>
  useInfiniteQuery({
    queryKey: ['links', type, sort],
    queryFn: ({ pageParam = 1 }) =>
      axios
        // TODO <WykopCollection<Link | Entry>>
        .get<WykopCollection<Link>>('/links', { params: { page: pageParam, sort, type } })
        .then((d) => d.data),

    getNextPageParam: (_, pages) => pages.length + 1,
    ...defaultQueryOptions,
  });

export default useLinks;
