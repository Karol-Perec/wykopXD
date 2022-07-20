import { useInfiniteQuery } from '@tanstack/react-query';
import { Entry, Collection, Link, TagMeta } from 'types';
import axios from 'utils/axios';

const getTag = async (page: number, tag: string) => {
  const { data } = await axios.get<Collection<Entry | Link> & { meta: TagMeta }>(`/tags/${tag}`, {
    params: { page },
  });
  return data;
};

const useTag = (tag: string) =>
  useInfiniteQuery(['entries', tag], ({ pageParam = 1 }) => getTag(pageParam, tag), {
    retry: false,
    staleTime: 100000,
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    getNextPageParam: (_lastPage, pages) => pages.length + 1,
  });

export default useTag;
