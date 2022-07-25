import { useInfiniteQuery } from '@tanstack/react-query';
import { Entry, Collection } from 'types';
import axios from 'utils/axios';
import { defaultOptions } from './defaultOptions';

const getEntries = async (page: number, category: string) => {
  const { data } = await axios.get<Collection<Entry>>('/entries', {
    params: { page, category },
  });
  return data.items;
};

const useEntries = (category: string) =>
  useInfiniteQuery(['entries', category], ({ pageParam = 1 }) => getEntries(pageParam, category), {
    ...defaultOptions,
    getNextPageParam: (_lastPage, pages) => pages.length + 1,
  });

export default useEntries;
