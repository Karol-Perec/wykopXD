import { Comment } from './comment.types';
import { Media } from './media.types';
import { User } from './user.types';

export interface Entry {
  id: number;
  user: User;
  body: string;
  date: string;
  voteCountPlus: number;
  commentsCount: number;
  media?: Media;
  comments?: Comment[];
}
