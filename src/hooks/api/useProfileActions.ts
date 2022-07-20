import { useInfiniteQuery } from '@tanstack/react-query';
import { Entry, Collection, Link } from 'types';
import axios from 'utils/axios';

const getProfileActions = async (page: number, username: string) => {
  const { data } = await axios.get<Collection<Entry | Link>>(`/profiles/${username}/actions`, {
    params: { page },
  });
  return data.items;
};

const useProfileActions = (username: string) =>
  useInfiniteQuery(
    ['profileActions', username],
    ({ pageParam = 1 }) => getProfileActions(pageParam, username),
    {
      retry: false,
      staleTime: 100000,
      keepPreviousData: true,
      refetchOnWindowFocus: false,
      getNextPageParam: (_lastPage, pages) => pages.length + 1,
    }
  );

export default useProfileActions;
