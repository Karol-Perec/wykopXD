import { Media } from './media.types';
import { User } from './user.types';

export interface Comment {
  id: number;
  user: User;
  body: string;
  date: string;
  voteCountPlus: number;
  voteCountMinus?: number;
  media?: Media;
  responses?: Comment[];
}

export interface ExtendedComment extends Comment {
  voteCountMinus: number;
  responses?: ExtendedComment[];
}
