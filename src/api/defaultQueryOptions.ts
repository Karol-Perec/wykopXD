import { UseQueryOptions } from '@tanstack/react-query';

export const defaultQueryOptions = {
  retry: false,
  staleTime: Infinity,
  refetchOnWindowFocus: false,
  // onError: (err) => {},
} satisfies Partial<UseQueryOptions>;
