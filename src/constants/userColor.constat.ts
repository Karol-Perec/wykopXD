import { ProfileStatus } from '../types';

export const USER_COLOR: Record<ProfileStatus, string> = {
  [ProfileStatus.GREEN]: '#393',
  [ProfileStatus.ORANGE]: '#ff5917',
  [ProfileStatus.RED]: '#f33',
  [ProfileStatus.ADMIN]: '#fff',
  [ProfileStatus.BANNED]: '#999',
  [ProfileStatus.DELETED]: '#999', // overlined
  [ProfileStatus.MEDIA]: '#3f6fa0',
};
