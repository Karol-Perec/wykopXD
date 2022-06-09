export enum ProfileStatus {
  GREEN = 0,
  ORANGE = 1,
  RED = 2,
  ADMIN = 5,
  BANNED = 1001,
  DELETED = 1002,
  MEDIA = 2001,
}

export interface User {
  login: string;
  sex?: 'male' | 'female';
  status: ProfileStatus;
  avatarUrl?: string;
}


export interface UserFull extends User {
  signupAt: string;
  linksAddedCount: number;
  linksPublishedCount: number;
  commentsCount: number;
  rank: number;
  followers: number;
}
