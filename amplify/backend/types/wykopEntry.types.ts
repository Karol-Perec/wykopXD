import { WykopEntryComment } from './wykopComment.types';
import { WykopEmbedContent } from './wykopEmbedContent.types';
import { WykopAuthor } from './wykopProfile.types';

export interface WykopSurveyAnswer {
  id: number;
  answer: string;
  count: number;
  percentage: number;
}

export interface WykopSurvey {
  question: string;
  answers: WykopSurveyAnswer[];
  user_answer?: number;
}

export interface WykopEntry {
  id: number;
  date: string;
  body: string;
  author: WykopAuthor;
  receiver?: WykopAuthor;
  blocked: boolean;
  favorite: boolean;
  vote_count: number;
  comments_count: number;
  comments?: WykopEntryComment[];
  status: 'visible' | string;
  embed?: WykopEmbedContent;
  survey?: WykopSurvey;
  can_comment?: boolean;
  user_vote: number;
  app?: string;
  violation_url?: string;
}

export interface WykopEntryFull extends WykopEntry {
  url: string;
  original: string;
}
