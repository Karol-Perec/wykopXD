import { useInfiniteQuery } from '@tanstack/react-query';
import { Entry, WykopCollection } from '~/types';
import axios from '~/utils/axios';
import { defaultQueryOptions } from './defaultQueryOptions';

const useEntries = (sort: string) =>
  useInfiniteQuery({
    queryKey: ['entries', sort],
    queryFn: ({ pageParam = 1 }) =>
      axios
        .get<WykopCollection<Entry>>('/entries', {
          params: { page: pageParam, sort: 'hot', last_update: 24 },
        })
        .then((d) => d.data),
    getNextPageParam: (_lastPage, pages) => pages.length + 1,
    ...defaultQueryOptions,
  });

export default useEntries;
