import { UserColor } from '~/types';

export const USER_COLORS: Record<UserColor, { hex: string; hex_dark: string }> = {
  black: { hex: '#000', hex_dark: '#fff' },
  burgundy: { hex: '#900', hex_dark: '#b11' },
  green: { hex: '#393', hex_dark: '#393' },
  orange: { hex: '#ff5917', hex_dark: '#ff5917' },
  purple: { hex: '#593787', hex_dark: '#694797' },
  red: { hex: '#d81e04', hex_dark: '#d81e04' },
};
