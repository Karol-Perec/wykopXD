import { useQuery } from 'react-query';
import { Link } from 'types/link.types';
import axios from 'utils/axios';

const getProfile = async (username: string) => {
  const { data } = await axios.get<Link>(`/profiles/${username}`);
  return data;
};

const useProfile = (username: string) =>
  useQuery(['profile', username], () => getProfile(username), {
    retry: false,
    staleTime: 10000,
    keepPreviousData: true,
    refetchOnWindowFocus: false,
  });

export default useProfile;
