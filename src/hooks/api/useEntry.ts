import { useQuery } from '@tanstack/react-query';
import { Entry } from '~/types';
import axios from '~/utils/axios';
import { defaultQueryOptions } from './defaultQueryOptions';

const useEntry = (id: string | number, initialData?: Entry, enabled = true) =>
  useQuery({
    queryKey: ['entry', id],
    queryFn: () => axios.get<Entry>(`/entries/${id}`),
    ...defaultQueryOptions,
    keepPreviousData: true,
    enabled,
    initialData,
    // initialDataUpdatedAt:
    //   initialData?.commentsCount !== initialData?.comments?.length ? 0 : undefined,
  });

export default useEntry;
