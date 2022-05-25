import { useInfiniteQuery } from 'react-query';
import { Link, Collection } from 'types';
import axios from 'utils/axios';

export type LinksCategory = 'promoted' | 'upcoming' | 'observed';

const getLinks = async (page: number, category: LinksCategory) => {
  const { data } = await axios.get<Collection<Link>>('/links', {
    params: { page, category },
  });
  return data.items;
};

const useLinks = (category: LinksCategory) =>
  useInfiniteQuery(['links', category], ({ pageParam = 1 }) => getLinks(pageParam, category), {
    retry: false,
    staleTime: 100000,
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    getNextPageParam: (_lastPage, pages) => pages.length + 1,
  });

export default useLinks;
