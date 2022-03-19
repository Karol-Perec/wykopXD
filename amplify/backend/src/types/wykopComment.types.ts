import { WykopEmbedContent } from './wykopEmbedContent.types';
import { WykopAuthor } from './wykopProfile.types';

interface WykopComment {
  id: number;
  date: string;
  author: WykopAuthor;
  vote_count: number;
  body: string; // | { html: string; text: string };
  parent_id: number;
  status?: 'own' | 'new' | 'read' | 'public' | 'visible' | 'deleted';
  can_vote: true;
  user_vote: number;
  blocked: boolean;
  favorite: boolean;
  embed?: WykopEmbedContent;
  app?: string;
  violation_url?: string;
}

export interface WykopEntryComment extends WykopComment {
  entry_id?: string;
}

export interface WykopEntryCommentFull extends WykopEntryComment {
  original: string;
}

export interface WykopLinkComment extends WykopComment {
  link_id?: string;
  vote_count_plus: number;
}

export interface WykopLinkCommentFull extends WykopLinkComment {
  vote_count_minus: number;
  original: string;
}
