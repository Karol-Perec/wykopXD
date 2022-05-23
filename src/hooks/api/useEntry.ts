import { useQuery } from 'react-query';
import { Entry } from 'types/entry.types';
import axios from 'utils/axios';

const getEntry = async (id: string) => {
  const { data } = await axios.get<Entry>(`/entries/${id}`);
  return data;
};

const useEntry = (id: string) =>
  useQuery(['entry', id], () => getEntry(id), {
    retry: false,
    staleTime: 10000,
    keepPreviousData: true,
    refetchOnWindowFocus: false,
  });

export default useEntry;
