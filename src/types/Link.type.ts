import { User } from './User.type';

export interface Link {
  id: number;
  author: User;
  buryCount: number;
  canVote: boolean;
  commentsCount: number;
  date: Date;
  description: string;
  isHot: boolean;
  plus18: boolean;
  preview: string;
  relatedCount: number;
  sourceUrl: string;
  tags: string;
  title: string;
  voteCount: number;
}
