import { useQuery } from '@tanstack/react-query';
import { Link } from '~/types';
import axios from '~/utils/axios';
import { defaultOptions } from './defaultOptions';

const getProfile = async (username: string) => {
  const { data } = await axios.get<Link>(`/profiles/${username}`);
  return data;
};

const useProfile = (username: string) =>
  useQuery(['profile', username], () => getProfile(username), defaultOptions);

export default useProfile;
