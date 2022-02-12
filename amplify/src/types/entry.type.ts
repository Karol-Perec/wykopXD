import { Media } from './media.type';
import { User } from './user.type';

export type EntriesSort = 'active' | 'hot' | 'favourite';

export interface Entry {
  id: number;
  user: User;
  body: string;
  date: Date;
  voteCountPlus: number;
  commentsCount: number;
  media?: Media;
  comments?: EntryComment[];
}

export interface EntryComment {
  id: number;
  user: User;
  body: string;
  date: Date;
  voteCountPlus: number;
}
