import { useInfiniteQuery } from '@tanstack/react-query';
import { Link, Collection } from '~/types';
import axios from '~/utils/axios';
import { defaultOptions } from './defaultOptions';

type LinksType = 'promoted' | 'upcoming' | 'observed';

const getLinks = async (page: number, type: LinksType, category?: string) => {
  const { data } = await axios.get<Collection<Link>>('/links', {
    params: { page, type, category },
  });
  return data.items;
};

const useLinks = (type: LinksType, category?: string) =>
  useInfiniteQuery(
    ['links', type, category],
    ({ pageParam = 1 }) => getLinks(pageParam, type, category),
    {
      ...defaultOptions,
      getNextPageParam: (_lastPage, pages) => pages.length + 1,
    }
  );

export default useLinks;
