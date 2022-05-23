import { useInfiniteQuery } from 'react-query';
import { Entry, Collection } from 'types';
import { MikroblogCategory } from 'pages/Mikroblog/mikroblog.types';
import axios from 'utils/axios';

// TO DO: add period
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
