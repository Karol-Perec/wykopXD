import { WykopLinkComment, WykopLinkCommentFull } from './wykopComment.types';
import { WykopAuthor, WykopAuthorFull } from './wykopProfile.types';

// wykop admistration info
interface WykopLinkInfo {
  type: 'positive' | 'negative';
  message: 'string';
}

export interface WykopLink {
  id: number;
  author: WykopAuthor;
  app?: string;
  bury_count: number;
  can_vote: boolean;
  comments_count: number;
  date: string;
  description: string; // | { html: string; text: string };
  is_hot: boolean;
  info?: WykopLinkInfo;
  is_recommended?: boolean;
  plus18: boolean;
  preview: string;
  related_count: number;
  source_url: string;
  status: 'upcoming' | 'promoted';
  tags: string;
  title: string; // | { html: string; text: string };
  user_vote?: boolean; //
  user_favorite: boolean;
  user_observe: boolean;
  user_lists?: any[]; //
  vote_count: number;
  comments?: WykopLinkComment[];
}

interface WykopLinkInfoFull {
  color: 'red' | 'yellow' | 'green';
  body: 'string';
}

export interface WykopLinkFull extends Omit<WykopLink, 'author' | 'info' | 'comments'> {
  author: WykopAuthorFull;
  has_own_content: boolean;
  info?: WykopLinkInfoFull;
  url: string;
  violation_url?: string;
  comments?: WykopLinkCommentFull[];
}
