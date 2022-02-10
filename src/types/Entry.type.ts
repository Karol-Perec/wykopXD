import { Comment } from './Comment.type';
import { Media } from './Media.type';
import { User } from './User.type';

export type EntriesSort = 'active' | 'hot' | 'favourite';

export interface Entry {
  id: number;
  user: User;
  body: string;
  date: Date;
  likeCount: number;
  commentsCount: number;
  comments?: Comment[];
  media?: Media;
}
