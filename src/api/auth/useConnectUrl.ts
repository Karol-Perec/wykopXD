import { useQuery } from '@tanstack/react-query';
import axios from '~/utils/axios';
import { defaultQueryOptions } from '../defaultQueryOptions';

const getConnectUrl = (redirectUrl: string) => axios.get<string>(`/auth/connect-url`, { params: { redirectUrl } });

const useConnectUrl = (redirectUrl: string, enabled: boolean) =>
  useQuery({
    queryKey: ['connect-url', redirectUrl],
    queryFn: () => getConnectUrl(redirectUrl),
    ...defaultQueryOptions,
    enabled,
  });

export default useConnectUrl;
