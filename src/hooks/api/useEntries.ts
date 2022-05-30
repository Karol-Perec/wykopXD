import { useInfiniteQuery } from 'react-query';
import { Entry, Collection, MikroblogCategory } from 'types';
import axios from 'utils/axios';

const getEntries = async (page: number, category: MikroblogCategory) => {
  const { data } = await axios.get<Collection<Entry>>('/entries', {
    params: { page, category },
  });
  return data.items;
};

const useEntries = (category: MikroblogCategory) =>
  useInfiniteQuery(['entries', category], ({ pageParam = 1 }) => getEntries(pageParam, category), {
    retry: false,
    staleTime: 100000,
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    getNextPageParam: (_lastPage, pages) => pages.length + 1,
  });

export default useEntries;
