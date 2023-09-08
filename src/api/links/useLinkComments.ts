import { useInfiniteQuery } from '@tanstack/react-query';
import { Comment, WykopCollection } from '~/types';
import axios from '~/utils/axios';
import { defaultQueryOptions } from '../defaultQueryOptions';

type CommentsSort = 'best' | 'newest' | 'oldest';

const useLinkComments = (linkId: number, sort: CommentsSort, enabled: boolean) =>
  useInfiniteQuery({
    queryKey: ['linkComments', linkId, sort],
    queryFn: ({ pageParam = 1 }) =>
      axios.get<WykopCollection<Comment<'link_comment'>>>(`/links/${linkId}/comments`, {
        params: {
          sort,
          page: pageParam,
        },
      }),
    enabled,
    ...defaultQueryOptions,
  });

export default useLinkComments;
