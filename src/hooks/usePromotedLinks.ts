import { useQuery } from 'react-query';
import { Link } from '../types/Link.type';
import axios from '../utils/axios';

const getPromotedLinks = async (page: number) => {
  const response = await axios.get<Link[]>('/links/promoted', {
    params: { page },
  });
  return response.data;
};

const usePromotedLinks = (page: number) =>
  useQuery(['promoted-links', page], () => getPromotedLinks(page), {
    staleTime: 10000,
    keepPreviousData: true,
    refetchOnWindowFocus: false,
  });

export default usePromotedLinks;
