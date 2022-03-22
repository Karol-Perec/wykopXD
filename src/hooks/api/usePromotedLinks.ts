import { QueryFunction, useInfiniteQuery } from 'react-query';
import { Link } from 'types/link.types';
import axios from 'utils/axios';

const getPromotedLinks: QueryFunction<Link[]> = async ({ pageParam = 1 }) => {
  const response = await axios.get<Link[]>('/links/promoted', {
    params: { page: pageParam },
  });
  return response.data;
};

const usePromotedLinks = () =>
  useInfiniteQuery(['promoted-links'], getPromotedLinks, {
    staleTime: 100000,
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    getNextPageParam: (_lastPage, pages) => pages.length + 1,
  });

export default usePromotedLinks;
