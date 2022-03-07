import { User } from './user.types';

export interface LinkComment {
  id: number;
  user: User;
  body: string;
  date: Date;
  voteCountPlus: number;
  voteCountMinus: number;
  responses?: LinkComment[];
}

export interface Link {
  id: number;
  user: User;
  voteCountPlus: number;
  voteCountMinus: number;
  commentsCount: number;
  date: Date;
  body: string;
  isHot: boolean;
  plus18: boolean;
  previewUrl: string;
  relatedCount: number;
  sourceUrl: string;
  title: string;
  comments?: LinkComment[];
}
