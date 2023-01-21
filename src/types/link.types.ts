import { Media } from './media.types';
import { UserPreview } from './user.types';

export interface Link {
  actions: {
    create: boolean;
    create_favourite: boolean;
    delete: boolean;
    delete_favourite: boolean;
    finish_ama: boolean;
    report: boolean;
    start_ama: boolean;
    undo_vote: boolean;
    update: boolean;
    vote_down: boolean;
    vote_up: boolean;
  };
  adult: boolean;
  archive: boolean;
  author: UserPreview;
  comments: {
    count: number;
    hot: boolean;
  };
  created_at: string;
  deletable: boolean;
  description: string;
  editable: boolean;
  hot: boolean;
  id: number;
  media: Media;
  parent: null;
  published_at: string;
  resource: 'link';
  slug: string;
  source: {
    label: string;
    type: 'anchor';
    type_id: number;
    url: string;
  };
  tags: string[];
  title: string;
  voted: number;
  votes: {
    count: number;
    down: number;
    up: number;
  };
}
