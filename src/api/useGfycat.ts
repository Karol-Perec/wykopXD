import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { defaultQueryOptions } from './defaultQueryOptions';

const getGfycat = async (sourceUrl: string): Promise<string> => {
  const id = sourceUrl.split('/').slice(-1);
  const { data } = await axios.get(`https://api.gfycat.com/v1/gfycats/${id}`);
  return data.gfyItem.mobileUrl;
};

const useGfycat = (sourceUrl: string, enabled: boolean) =>
  useQuery({
    queryKey: ['gfycat', sourceUrl],
    queryFn: () => getGfycat(sourceUrl),
    ...defaultQueryOptions,
    enabled,
  });

export default useGfycat;
