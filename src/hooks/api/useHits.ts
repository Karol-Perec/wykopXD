import { useInfiniteQuery } from 'react-query';
import { Link } from 'types/link.types';
import { HitsPeriod } from 'containers/Hits/hits.types';
import axios from 'utils/axios';

// TO DO: add period
const getHits = async (page: number, period: HitsPeriod) => {
  const response = await axios.get<Link[]>('/hits', {
    params: { page, period },
  });
  return response.data;
};

const useHits = (period: HitsPeriod) =>
  useInfiniteQuery(['hits', period], ({ pageParam = 1 }) => getHits(pageParam, period), {
    staleTime: 100000,
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    getNextPageParam: (_lastPage, pages) => pages.length + 1,
  });

export default useHits;
