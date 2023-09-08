import { useQuery } from '@tanstack/react-query';
import { WykopResponse } from '~/types';
import axios from '~/utils/axios';

type ConnectUrlResponse = WykopResponse<{
  connect_url: string;
}>;

const useConnect = () =>
  useQuery({
    queryFn: () => axios.get<ConnectUrlResponse>(`/connect`),
    onSuccess: ({ data }) => {
      window.location.href = data.connect_url;
    },
  });

export default useConnect;
