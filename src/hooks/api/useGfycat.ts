import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { defaultOptions } from './defaultOptions';

const getGfycat = async (sourceUrl: string): Promise<string> => {
  const id = sourceUrl.split('/').slice(-1);
  const { data } = await axios.get(`https://api.gfycat.com/v1/gfycats/${id}`);
  return data.gfyItem.mobileUrl;
};

const useGfycat = (sourceUrl: string, enabled: boolean) =>
  useQuery(['gfycat', sourceUrl], () => getGfycat(sourceUrl), {
    ...defaultOptions,
    enabled,
  });

export default useGfycat;
