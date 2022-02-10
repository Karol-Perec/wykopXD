import { User } from './User.type';

export interface Comment {
  id: number;
  user: User;
  body: string;
  date: Date;
  likeCount: number;
  dislikeCount: number;
  responses?: Comment[];
}
