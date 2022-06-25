import { useQuery } from 'react-query';
import { Link } from 'types';
import axios from 'utils/axios';

const getLink = async (id: string | number) => {
  const { data } = await axios.get<Link>(`/links/${id}`);
  return data;
};

const useLink = (id: string | number, initialData?: Link) =>
  useQuery(['link', id], () => getLink(id), {
    retry: false,
    staleTime: 10000,
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    initialData,
    initialDataUpdatedAt: 0,
  });

export default useLink;
