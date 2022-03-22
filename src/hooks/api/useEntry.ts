import { useQuery } from 'react-query';
import { Entry } from 'types/entry.types';
import axios from 'utils/axios';

const getEntry = async (id: number) => {
  const response = await axios.get<Entry>(`/entries/${id}`);
  return response.data;
};

const useEntry = (id: number) =>
  useQuery(['entry', id], () => getEntry(id), {
    staleTime: 10000,
    keepPreviousData: true,
    refetchOnWindowFocus: false,
  });

export default useEntry;
