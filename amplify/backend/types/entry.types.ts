import { Media } from './media.types';
import { User } from './user.types';

export type EntriesSort = 'active' | 'hot' | 'favourite';

export interface EntryComment {
  id: number;
  user: User;
  body: string;
  date: string;
  voteCountPlus: number;
}

export interface Entry {
  id: number;
  user: User;
  body: string;
  date: string;
  voteCountPlus: number;
  commentsCount: number;
  media?: Media;
  comments?: EntryComment[];
}
