import { useInfiniteQuery } from '@tanstack/react-query';
import { Entry, Collection, Link } from '~/types';
import axios from '~/utils/axios';
import { defaultOptions } from './defaultOptions';

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
      ...defaultOptions,
      getNextPageParam: (_lastPage, pages) => pages.length + 1,
    }
  );

export default useProfileActions;
