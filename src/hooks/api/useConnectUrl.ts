import { useQuery } from 'react-query';
import axios from 'utils/axios';

const getConnectUrl = async (redirectUrl: string) => {
  const { data } = await axios.get<string>(`/auth/connect-url`, { params: { redirectUrl } });
  return data;
};

const useConnectUrl = (redirectUrl: string, enabled: boolean) =>
  useQuery(['profile', redirectUrl], () => getConnectUrl(redirectUrl), {
    retry: false,
    staleTime: Infinity,
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    enabled,
  });

export default useConnectUrl;
