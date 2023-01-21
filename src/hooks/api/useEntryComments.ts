import { useInfiniteQuery } from '@tanstack/react-query';
import { Comment, Entry, WykopCollection } from '~/types';
import axios from '~/utils/axios';
import { defaultQueryOptions } from './defaultQueryOptions';

type CommentsSort = 'best' | 'newest' | 'oldest';

const useEntryComments = (entry: Entry, sort: CommentsSort, enabled: boolean) =>
  useInfiniteQuery({
    queryKey: ['entryComments', entry.id, sort],
    queryFn: ({ pageParam = 1 }) =>
      axios.get<WykopCollection<Comment<'entry_comment'>>>(`/entries/${entry.id}/comments`, {
        params: {
          sort,
          page: pageParam,
        },
      }),
    // initialData: {entry.comments.items.},
    // initialDataUpdatedAt:
    //   initialData?.commentsCount !== initialData?.comments?.length ? 0 : undefined,
    enabled,
    ...defaultQueryOptions,
  });

export default useEntryComments;
