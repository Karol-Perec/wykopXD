import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const getGfycat = async (sourceUrl: string): Promise<string> => {
  const id = sourceUrl.split('/').slice(-1);
  const { data } = await axios.get(`https://api.gfycat.com/v1/gfycats/${id}`);
  return data.gfyItem.mobileUrl;
};

const useGfycat = (sourceUrl: string, enabled: boolean) =>
  useQuery(['gfycat', sourceUrl], () => getGfycat(sourceUrl), {
    retry: false,
    staleTime: 10000,
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    enabled,
  });

export default useGfycat;
