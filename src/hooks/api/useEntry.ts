import { useQuery } from 'react-query';
import { Entry } from 'types';
import axios from 'utils/axios';

const getEntry = async (id: string) => {
  const { data } = await axios.get<Entry>(`/entries/${id}`);
  return data;
};

const useEntry = (id: string, initialData?: Entry) =>
  useQuery(['entry', id], () => getEntry(id), {
    retry: false,
    staleTime: 10000,
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    initialData,
    initialDataUpdatedAt:
      initialData?.commentsCount && initialData?.commentsCount > 2 ? 0 : undefined,
  });

export default useEntry;
