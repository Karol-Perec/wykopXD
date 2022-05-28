import { useMutation } from 'react-query';
import { Link, Collection } from 'types';
import axios from 'utils/axios';

export type LinksCategory = 'promoted' | 'upcoming' | 'observed';

const login = async (connectData: string) => {
  const { data } = await axios.post<Collection<Link>>('/auth/login', connectData);
  return data;
};

const useLogin = (connectData: string) => useMutation(() => login(connectData));

export default useLogin;
