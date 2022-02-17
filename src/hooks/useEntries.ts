import { useInfiniteQuery } from 'react-query';
import { Entry } from 'types';
import { MikroblogCategory } from '../containers/Mikroblog/mikroblog.types';
import axios from '../utils/axios';

// TO DO: add period
const getEntries = async (page: number, category: MikroblogCategory) => {
  const response = await axios.get<Entry[]>('/entries', {
    params: { page, category },
  });
  return response.data;
};

const useEntries = (category: MikroblogCategory) =>
  useInfiniteQuery(['entries', category], ({ pageParam = 1 }) => getEntries(pageParam, category), {
    staleTime: 100000,
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    getNextPageParam: (_lastPage, pages) => pages.length + 1,
  });

export default useEntries;
