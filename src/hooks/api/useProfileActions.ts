import { useInfiniteQuery } from 'react-query';
import { Entry } from 'types/entry.types';
import axios from 'utils/axios';
import { Link } from '../../types/link.types';

const getProfileActions = async (page: number, username: string) => {
  const response = await axios.get<(Entry | Link)[]>(`/profiles/${username}/actions`, {
    params: { page },
  });
  return response.data;
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
