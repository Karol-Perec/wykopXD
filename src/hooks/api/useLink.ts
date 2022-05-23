import { useQuery } from 'react-query';
import { Link } from 'types/link.types';
import axios from 'utils/axios';

const getLink = async (id: string) => {
  const { data } = await axios.get<Link>(`/links/${id}`);
  return data;
};

const useLink = (id: string) =>
  useQuery(['link', id], () => getLink(id), {
    retry: false,
    staleTime: 10000,
    keepPreviousData: true,
    refetchOnWindowFocus: false,
  });

export default useLink;
