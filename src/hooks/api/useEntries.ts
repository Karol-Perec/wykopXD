import { useInfiniteQuery } from 'react-query';
import { Entry, Collection, MikroblogCategory } from 'types';
import axios from 'utils/axios';

const getEntries = async (page: number, sort: MikroblogCategory) => {
  const { data } = await axios.get<Collection<Entry>>('/entries', {
    params: { page, sort },
  });
  return data.items;
};

const useEntries = (sort: MikroblogCategory) =>
  useInfiniteQuery(['entries', sort], ({ pageParam = 1 }) => getEntries(pageParam, sort), {
    retry: false,
    staleTime: 100000,
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    getNextPageParam: (_lastPage, pages) => pages.length + 1,
  });

export default useEntries;
