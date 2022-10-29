export enum ProfileStatus {
  GREEN = 0,
  ORANGE = 1,
  RED = 2,
  ADMIN = 5, // ?
  BANNED = 1001, // ?
  DELETED = 1002, // gray overlined
  MEDIA = 2001, // blue media
}

export interface User {
  login: string;
  sex?: 'male' | 'female';
  status: ProfileStatus;
  avatarUrl?: string;
}

export interface Profile extends User {
  about?: string;
  backgroundUrl?: string;
  registeredAt: string;
  rank: number;
  commentsCount: number;
  diggsCount: number;
  entriesCount: number;
  entriesCommentsCount: number;
  followersCount: number;
  followingCount: number;
  linksAddedCount: number;
  linksPublishedCount: number;
  isBlocked: boolean;
  isObserved: boolean;
  isVerified?: boolean;
}
