import { useInfiniteQuery } from 'react-query';
import { Entry } from 'types/entry.types';
import { Collection } from 'types/api.types';
import axios from 'utils/axios';
import { Link } from '../../types/link.types';

const getTag = async (page: number, tag: string) => {
  const { data } = await axios.get<Collection<Entry | Link> & { meta: any }>(`/tags/${tag}`, {
    params: { page },
  });
  return data.items;
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
