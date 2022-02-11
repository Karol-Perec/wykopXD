import { User } from './User.type';
export interface Link {
  id: number;
  user: User;
  buryCount: number;
  commentsCount: number;
  date: Date;
  body: string;
  isHot: boolean;
  plus18: boolean;
  preview: string;
  relatedCount: number;
  sourceUrl: string;
  title: string;
  voteCount: number;
  comments?: LinkComment[];
}

export interface LinkComment {
  id: number;
  user: User;
  body: string;
  date: Date;
  voteCountPlus: number;
  voteCountMinus: number;
  responses?: LinkComment[];
}
