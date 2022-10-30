import { UserStatus } from '../types';

export const USER_COLOR: Record<UserStatus, string> = {
  [UserStatus.GREEN]: '#393',
  [UserStatus.ORANGE]: '#ff5917',
  [UserStatus.RED]: '#e22',
  [UserStatus.ADMIN]: '#fff',
  [UserStatus.BANNED]: '#999',
  [UserStatus.DELETED]: '#999', // overlined
  [UserStatus.MEDIA]: '#3f6fa0',
};
