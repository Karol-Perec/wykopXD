import { useQuery } from 'react-query';
import axios from 'axios';

const getGfycat = async (sourceUrl: string) => {
  const id = sourceUrl.split('/').slice(-1);
  const { data } = await axios.get(`https://api.gfycat.com/v1/gfycats/${id}`);
  return data.gfyItem.mobileUrl as string;
};

const useGfycat = (sourceUrl: string) =>
  useQuery(['gfycat', sourceUrl], () => getGfycat(sourceUrl), {
    retry: false,
    staleTime: 10000,
    keepPreviousData: true,
    refetchOnWindowFocus: false,
  });

export default useGfycat;
