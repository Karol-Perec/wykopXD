import { useQuery } from 'react-query';
import { Link } from '../types/Link.type';
import axios from '../utils/axios';

const fetchMainLinks = async (page: number) => {
  const response = await axios.get<Link[]>('/links/promoted/', {
    params: { page },
  });
  return response.data;
};

const useMainLinks = (page: number) =>
  useQuery(['main-links', page], () => fetchMainLinks(page), {
    staleTime: 10000,
    keepPreviousData: true,
    refetchOnWindowFocus: false,
  });

export default useMainLinks;
