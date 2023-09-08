import { useQuery } from '@tanstack/react-query';
import { Link, WykopResponse } from '~/types';
import axios from '~/utils/axios';
import { defaultQueryOptions } from '../defaultQueryOptions';

const useLink = (id: string | number, initialData?: Link, enabled = true) =>
  useQuery({
    queryKey: ['link', id],
    queryFn: () => axios.get<WykopResponse<Link>>(`/links/${id}`).then((d) => d.data),
    ...defaultQueryOptions,
    enabled,
    initialData,
    initialDataUpdatedAt: 0,
  });

export default useLink;
