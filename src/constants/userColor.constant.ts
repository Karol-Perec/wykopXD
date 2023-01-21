import { UserColor } from '~/types';

export const USER_COLOR = new Map<UserColor, { hex: string; hex_dark: string }>([
  ['black', { hex: '000000', hex_dark: 'ffffff' }],
  ['burgundy', { hex: '990000', hex_dark: 'bb1111' }],
  ['green', { hex: '339933', hex_dark: '339933' }],
  ['orange', { hex: 'ff5917', hex_dark: 'ff5917' }],
  ['purple', { hex: '593787', hex_dark: '694797' }],
  ['red', { hex: 'd81e04', hex_dark: 'd81e04' }],
]);
