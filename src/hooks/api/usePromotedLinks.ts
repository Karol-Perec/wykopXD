import { QueryFunction, useInfiniteQuery } from 'react-query';
import { Link, Collection } from 'types';
import axios from 'utils/axios';

const getPromotedLinks: QueryFunction<Link[]> = async ({ pageParam = 1 }) => {
  const { data } = await axios.get<Collection<Link>>('/links/promoted', {
    params: { page: pageParam },
  });
  return data.items;
};

const usePromotedLinks = () =>
  useInfiniteQuery(['promoted-links'], getPromotedLinks, {
    retry: false,
    staleTime: 100000,
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    getNextPageParam: (_lastPage, pages) => pages.length + 1,
  });

export default usePromotedLinks;
