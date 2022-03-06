import { useQuery } from 'react-query';
import { Link } from '../../types/link.types';
import axios from '../../utils/axios';

const getLink = async (id: number) => {
  const response = await axios.get<Link>(`/links/${id}`);
  return response.data;
};

const useLink = (id: number) =>
  useQuery(['link', id], () => getLink(id), {
    staleTime: 10000,
    keepPreviousData: true,
    refetchOnWindowFocus: false,
  });

export default useLink;
