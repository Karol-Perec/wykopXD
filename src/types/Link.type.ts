import { Author } from './Author.type';

export type LinkStatus = 'promoted';

export interface Link {
  id: number;
  author: Author;
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
  status: LinkStatus;
  tags: string;
  title: string;
  voteCount: number;
}
