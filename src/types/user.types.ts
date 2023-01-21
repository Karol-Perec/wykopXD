export type UserColor = 'black' | 'burgundy' | 'green' | 'orange' | 'purple' | 'red';

export interface UserPreview {
  avatar: string;
  blacklist: false;
  color: UserColor;
  company: boolean;
  follow: boolean;
  gender: 'm' | 'f' | null;
  note: boolean;
  online: boolean;
  rank: {
    position: null;
    trend: 0;
  };
  status: 'active';
  username: string;
  verified: boolean;
}

export interface User extends UserPreview {
  about: string;
  actions: {
    blacklist: boolean;
    follow: boolean;
    report: boolean;
    update: boolean;
    update_gender: boolean;
    update_note: boolean;
  };
  background: string;
  city: string;
  followers: number;
  member_since: string; // "2008-04-02 21:42:26"
  name: string;
  public_email: string;
  social_media: {
    facebook: string;
    instagram: string;
    twitter: string;
  };
  website: string;
}
