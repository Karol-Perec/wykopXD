import { useQuery } from '@tanstack/react-query';
import { Link } from 'types';
import axios from 'utils/axios';
import { defaultOptions } from './defaultOptions';

const getLink = async (id: string | number) => {
  const { data } = await axios.get<Link>(`/links/${id}`);
  return data;
};

const useLink = (id: string | number, initialData?: Link, enabled = true) =>
  useQuery(['link', id], () => getLink(id), {
    ...defaultOptions,
    enabled,
    initialData,
    initialDataUpdatedAt: 0,
  });

export default useLink;
