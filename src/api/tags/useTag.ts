import { useInfiniteQuery } from '@tanstack/react-query';
import { Entry, WykopCollection, Link, TagMeta } from '~/types';
import axios from '~/utils/axios';
import { defaultQueryOptions } from '../defaultQueryOptions';

const getTag = (page: number, tag: string) =>
  axios.get<WykopCollection<Entry | Link> & { meta: TagMeta }>(`/tags/${tag}`, {
    params: { page },
  });

const useTag = (tag: string) =>
  useInfiniteQuery({
    queryKey: ['tag', tag],
    queryFn: ({ pageParam = 1 }) => getTag(pageParam, tag),
    getNextPageParam: (_lastPage, pages) => pages.length + 1,
    ...defaultQueryOptions,
  });

export default useTag;
