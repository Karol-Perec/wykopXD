import { useQuery } from '@tanstack/react-query';
import { User } from '~/types';
import axios from '~/utils/axios';
import { defaultQueryOptions } from '../defaultQueryOptions';

const getUser = (username: string) => axios.get<User>(`/users/${username}`);

const useUser = (username: string) =>
  useQuery({
    queryKey: ['user', username],
    queryFn: () => getUser(username),
    ...defaultQueryOptions,
  });

export default useUser;
