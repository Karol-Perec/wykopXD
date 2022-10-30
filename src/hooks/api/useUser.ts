import { useQuery } from '@tanstack/react-query';
import { UserFull } from '~/types';
import axios from '~/utils/axios';
import { defaultOptions } from './defaultOptions';

const getUser = async (username: string) => {
  const { data } = await axios.get<UserFull>(`/users/${username}`);
  return data;
};

const useUser = (username: string) =>
  useQuery(['user', username], () => getUser(username), defaultOptions);

export default useUser;
