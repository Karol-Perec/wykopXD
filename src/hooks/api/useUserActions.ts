import { useInfiniteQuery } from '@tanstack/react-query';
import { Entry, Collection, Link } from '~/types';
import axios from '~/utils/axios';
import { defaultOptions } from './defaultOptions';

const getUserActions = async (page: number, username: string) => {
  const { data } = await axios.get<Collection<Entry | Link>>(`/users/${username}/actions`, {
    params: { page },
  });
  return data.items;
};

const useUserActions = (username: string) =>
  useInfiniteQuery(
    ['user-actions', username],
    ({ pageParam = 1 }) => getUserActions(pageParam, username),
    {
      ...defaultOptions,
      getNextPageParam: (_lastPage, pages) => pages.length + 1,
    }
  );

export default useUserActions;
