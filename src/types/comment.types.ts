import { Media } from './media.types';
import { UserPreview } from './user.types';

export type CommentType = 'link_comment' | 'entry_comment';

export interface Comment<T extends CommentType | unknown = unknown> {
  actions: {
    create: boolean;
    create_favourite: boolean;
    delete: boolean;
    delete_favourite: boolean;
    report: boolean;
    update: boolean;
    vote_down: boolean;
    vote_up: boolean;
  };
  adult: false;
  archive: false;
  author: UserPreview;
  blacklist: boolean;
  comments?: {
    count: number;
    items: Comment<T>[];
  };
  content: string;
  created_at: string;
  deletable: boolean;
  deleted: string;
  device: string;
  editable: boolean;
  favourite: boolean;
  id: number;
  media: Media;
  parent: {
    author: UserPreview;
    id: number;
    // link: Link;
    resource: (T extends 'link_comment' ? 'link' : 'entry') | T;
    slug: string;
  } | null;
  parent_id?: number | null;
  resource: T;
  slug: 'komentarz';
  tags: string[];
  voted: number;
  votes: {
    down: number;
    up: number;
    users: [];
  };
}
