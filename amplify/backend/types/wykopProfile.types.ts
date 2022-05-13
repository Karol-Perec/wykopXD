enum WykopProfileColor {
  GREEN = 0,
  ORANGE = 1,
  RED = 2,
  ADMIN = 5, // ?
  BANNED = 1001, // ?
  DELETED = 1002, // gray overlined
  MEDIA = 2001, // blue media
}

export interface WykopProfile {
  login: string;
  sex?: 'male' | 'female';
  color: WykopProfileColor;
  avatar: string;
  signup_at: string;
  background?: string; // image url
  is_verified: boolean;
  is_observed: boolean; // is observed by current user
  is_blocked: boolean; // is blocekd by current user
  email: string;
  about: string;
  name: string;
  www: string;
  jabber: string;
  gg: string;
  city: string;
  facebook: string;
  twitter: string;
  instagram: string;
  links_added_count: number;
  links_published_count: number;
  comments_count: number;
  rank: number;
  followers: number;
  following: number;
  entries: number;
  entries_comments: number;
  diggs: number;
  buries: number;
  violation_url?: string;
  ban?: any;
}

export type WykopAuthor = Pick<WykopProfile, 'login' | 'sex' | 'color' | 'avatar'>;

export type WykopAuthorFull = Pick<
  WykopProfile,
  keyof WykopAuthor | 'signup_at' | 'background' | 'violation_url'
>;
