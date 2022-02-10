import { useQuery } from 'react-query';
import { Entry } from 'types';
import { MikroblogCategory } from '../containers/Mikroblog/Mikroblog';
import axios from '../utils/axios';

// TO DO: add period
const getEntries = async (page: number, category: MikroblogCategory) => {
  const response = await axios.get<Entry[]>('/entries', {
    params: { page, category },
  });
  return response.data;
};

const useEntries = (page: number, category: MikroblogCategory) =>
  useQuery(['entries', page, category], () => getEntries(page, category), {
    staleTime: 10000,
    keepPreviousData: true,
    refetchOnWindowFocus: false,
  });

export default useEntries;
