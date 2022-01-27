import { useQuery } from 'react-query';
import { Link } from '../types/Link.type';
import axios from '../utils/axios';

const fetchMainLinks = async (pageNumber: number) => {
  const response = await axios.get<Link[]>(`/links/promoted/${pageNumber}`);
  return response.data;
};

const useMainLinks = (pageNumber: number) =>
  useQuery(['main-links', pageNumber], () => fetchMainLinks(pageNumber), {
    staleTime: 10000,
    keepPreviousData: true,
    refetchOnWindowFocus: false,
  });

export default useMainLinks;
