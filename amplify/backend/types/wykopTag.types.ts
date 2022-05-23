import { WykopAuthor } from './wykopProfile.types';

export interface WykopTagMeta {
  tag: string;
  is_observed: boolean;
  is_blocked: boolean;
  is_own: boolean;
  owner: WykopAuthor | null;
  description: string | null;
  background: string | null;
  counters: {
    total: number;
    entries: number;
    links: number;
  };
}
