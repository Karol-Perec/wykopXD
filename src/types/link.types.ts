import { ExtendedComment } from './comment.types';
import { User } from './user.types';

export interface Link {
  id: number;
  user: User;
  voteCountPlus: number;
  voteCountMinus: number;
  commentsCount: number;
  date: string;
  body: string;
  isHot: boolean;
  plus18: boolean;
  previewUrl: string;
  relatedCount: number;
  sourceUrl: string;
  title: string;
  comments?: ExtendedComment[];
}
