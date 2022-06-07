import { Media } from './media.types';
import { User } from './user.types';

export interface EntryComment {
  id: number;
  user: User;
  body: string;
  date: string;
  voteCountPlus: number;
  media?: Media;
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
