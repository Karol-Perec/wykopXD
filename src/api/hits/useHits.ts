import { useInfiniteQuery } from '@tanstack/react-query';
import { Link, WykopCollection } from '~/types';
import axios from '~/utils/axios';
import { defaultQueryOptions } from '../defaultQueryOptions';

export type HitsSortParam = 'day' | 'week' | 'all';

const useHits = (sort: HitsSortParam, year?: number, month?: number) =>
  useInfiniteQuery({
    queryKey: ['hits', sort, year, month],
    queryFn: ({ pageParam = 1 }) =>
      axios
        .get<WykopCollection<Link>>('/hits/links', {
          params: { page: pageParam, sort, year, month },
        })
        .then((d) => d.data),
    getNextPageParam: (_, pages) => pages.length + 1,
    ...defaultQueryOptions,
  });

export default useHits;
