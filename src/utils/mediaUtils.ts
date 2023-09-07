import ReactPlayer from 'react-player';
import { Link, MediaType, MimeType } from '~/types';

type ImageQuality = 'original' | 'hd' | 'hq' | 'mq' | '220x142' | '440x284';

const qualityResolutionMap: Record<ImageQuality, string> = {
  hd: ',w800',
  hq: ',w400',
  mq: ',w300',
  '220x142': ',w220h142',
  '440x284': ',w2440h284',
  original: '',
};

export const getDisplayedImageUrl = (imageUrl: string, quality: ImageQuality, mimeType: MimeType) => {
  switch (mimeType) {
    case 'image/jpeg':
      return imageUrl.replace('.jpg', `${qualityResolutionMap[quality]}.jpg`);
    case 'image/png':
      return imageUrl.replace('.png', `${qualityResolutionMap[quality]}.png`);
    default:
      return imageUrl;
  }
};

export const getImageQuality = (listMode: boolean, isBlur: boolean): ImageQuality => {
  if (isBlur) return 'mq';
  return listMode ? 'hq' : 'hd';
};

export const getLinkMediaType = (link: Link): MediaType => {
  if (sourceUrl.includes('gfycat.com')) return 'gfycat';
  if (ReactPlayer.canPlay(sourceUrl)) return 'video';
  return 'image';
};

export const parseImageUrl = (url: string | undefined, size: number) => url?.replace('.jpg', `,q${size}.jpg`);
