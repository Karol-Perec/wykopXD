import { useInfiniteQuery } from '@tanstack/react-query';
import { Entry, WykopCollection } from '~/types';
import axios from '~/utils/axios';
import { defaultQueryOptions } from '../defaultQueryOptions';

export type EntriesSort = 'newest' | 'active' | 'hot';

const useEntries = (sort: EntriesSort, lastUpdate?: string) =>
  useInfiniteQuery({
    queryKey: ['entries', sort, lastUpdate],
    queryFn: ({ pageParam = 1 }) =>
      axios
        .get<WykopCollection<Entry>>('/entries', {
          params: { page: pageParam, sort, last_update: lastUpdate },
        })
        .then((d) => d.data),
    getNextPageParam: (_lastPage, pages) => pages.length + 1,
    ...defaultQueryOptions,
  });

export default useEntries;
