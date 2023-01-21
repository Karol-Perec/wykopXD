import { useQuery } from '@tanstack/react-query';
import { Link } from '~/types';
import axios from '~/utils/axios';
import { defaultQueryOptions } from './defaultQueryOptions';

const useLink = (id: string | number, initialData?: Link, enabled = true) =>
  useQuery({
    queryKey: ['link', id],
    queryFn: () => axios.get<Link>(`/links/${id}`),
    ...defaultQueryOptions,
    enabled,
    initialData,
    initialDataUpdatedAt: 0,
  });

export default useLink;
