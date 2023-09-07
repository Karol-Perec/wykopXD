import { useInfiniteQuery } from '@tanstack/react-query';
import { Entry, WykopCollection, Link } from '~/types';
import axios from '~/utils/axios';
import { defaultQueryOptions } from './defaultQueryOptions';

const getUserActions = async (page: number, username: string) =>
  axios.get<WykopCollection<Entry | Link>>(`/users/${username}/actions`, { params: { page } }).then((d) => d.data);

const useUserActions = (username: string) =>
  useInfiniteQuery({
    queryKey: ['user-actions', username],
    queryFn: ({ pageParam = 1 }) => getUserActions(pageParam, username),
    getNextPageParam: (_, pages) => pages.length + 1,
    ...defaultQueryOptions,
  });

export default useUserActions;
