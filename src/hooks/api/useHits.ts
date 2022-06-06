import { useInfiniteQuery } from 'react-query';
import { Link, Collection, HitsPeriod } from 'types';
import axios from 'utils/axios';

// TO DO: add period
const getHits = async (page: number, period: HitsPeriod) => {
  const { data } = await axios.get<Collection<Link>>('/hits', {
    params: { page, period },
  });
  return data.items;
};

const useHits = (period: HitsPeriod) =>
  useInfiniteQuery(['hits', period], ({ pageParam = 1 }) => getHits(pageParam, period), {
    retry: false,
    staleTime: 100000,
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    getNextPageParam: (_lastPage, pages) => pages.length + 1,
  });

export default useHits;
