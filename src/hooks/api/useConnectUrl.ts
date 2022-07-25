import { useQuery } from '@tanstack/react-query';
import axios from 'utils/axios';
import { defaultOptions } from './defaultOptions';

const getConnectUrl = async (redirectUrl: string) => {
  const { data } = await axios.get<string>(`/auth/connect-url`, { params: { redirectUrl } });
  return data;
};

const useConnectUrl = (redirectUrl: string, enabled: boolean) =>
  useQuery(['profile', redirectUrl], () => getConnectUrl(redirectUrl), {
    ...defaultOptions,
    enabled,
  });

export default useConnectUrl;
