import { Comment } from './comment.types';
import { Media } from './media.types';
import { User, UserPreview } from './user.types';

export interface Entry {
  actions: {
    create: boolean;
    create_favourite: boolean;
    delete: boolean;
    delete_favourite: boolean;
    report: boolean;
    update: boolean;
    vote_up: boolean;
  };
  adult: false;
  archive: false;
  author: User;
  comments: {
    count: number;
    items: Comment<'entry_comment'>[];
  };
  blacklist: boolean;
  content: string;
  created_at: string;
  deletable: boolean;
  deleted?: 'moderator';
  device: string;
  editable: boolean;
  favourite: boolean;
  id: number;
  media: Media;
  parent: null;
  resource: 'entry';
  slug: string;
  status: 'visible';
  tags: string[];
  voted: number;
  votes: {
    down: number;
    up: number;
    users: UserPreview[];
  };
}
