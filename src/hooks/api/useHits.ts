import { useInfiniteQuery } from '@tanstack/react-query';
import { Link, WykopCollection } from '~/types';
import axios from '~/utils/axios';
import { defaultQueryOptions } from './defaultQueryOptions';

const useHits = (category: string, year?: number, month?: number) =>
  useInfiniteQuery({
    queryKey: ['hits', category, year, month],
    queryFn: ({ pageParam = 1 }) =>
      axios
        .get<WykopCollection<Link>>('/hits', {
          params: { page: pageParam, category, year, month },
        })
        .then((d) => d.data),
    getNextPageParam: (_, pages) => pages.length + 1,
    ...defaultQueryOptions,
  });

export default useHits;
