import { useInfiniteQuery } from 'react-query';
import { Entry } from 'types/entry.types';
import { Collection } from 'types/api.types';
import axios from 'utils/axios';
import { Link } from '../../types/link.types';

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
