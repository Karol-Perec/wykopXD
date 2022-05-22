import { useInfiniteQuery } from 'react-query';
import { Entry } from 'types/entry.types';
import axios from 'utils/axios';
import { Link } from '../../types/link.types';

const getTag = async (page: number, tag: string) => {
  const response = await axios.get<(Entry | Link)[]>(`/tags/${tag}`, {
    params: { page },
  });
  return response.data;
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
