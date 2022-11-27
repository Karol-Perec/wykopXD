import { useInfiniteQuery } from '@tanstack/react-query';
import { Link, Collection } from '~/types';
import axios from '~/utils/axios';
import { defaultOptions } from './defaultOptions';

const getHits = async (page: number, category: string, year?: number, month?: number) => {
  const { data } = await axios.get<Collection<Link>>('/hits', {
    params: { page, category, year, month },
  });
  return data.items;
};

const useHits = (category: string, year?: number, month?: number) =>
  useInfiniteQuery(
    ['hits', category, year, month],
    ({ pageParam = 1 }) => getHits(pageParam, category, year, month),
    {
      ...defaultOptions,
      getNextPageParam: (_, pages) => pages.length + 1,
    }
  );

export default useHits;
