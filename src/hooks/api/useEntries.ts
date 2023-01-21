import { useInfiniteQuery } from '@tanstack/react-query';
import { Entry, WykopCollection } from '~/types';
import axios from '~/utils/axios';
import { defaultQueryOptions } from './defaultQueryOptions';

const useEntries = (category: string) =>
  useInfiniteQuery({
    queryKey: ['entries', category],
    queryFn: ({ pageParam = 1 }) =>
      axios.get<WykopCollection<Entry>>('/entries', { params: { page: pageParam, category } }),
    getNextPageParam: (_lastPage, pages) => pages.length + 1,
    ...defaultQueryOptions,
  });

export default useEntries;
