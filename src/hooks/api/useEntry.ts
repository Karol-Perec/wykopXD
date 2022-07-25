import { useQuery } from '@tanstack/react-query';
import { Entry } from 'types';
import axios from 'utils/axios';
import { defaultOptions } from './defaultOptions';

const getEntry = async (id: string | number) => {
  const { data } = await axios.get<Entry>(`/entries/${id}`);
  return data;
};

const useEntry = (id: string | number, initialData?: Entry, enabled = true) =>
  useQuery(['entry', id], () => getEntry(id), {
    ...defaultOptions,
    keepPreviousData: true,
    enabled,
    initialData,
    initialDataUpdatedAt:
      initialData?.commentsCount !== initialData?.comments?.length ? 0 : undefined,
  });

export default useEntry;
