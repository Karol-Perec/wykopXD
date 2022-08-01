import ReactPlayer from 'react-player';
import { MediaType } from 'types';

type ImageQuality = 'original' | 'hd' | 'hq' | 'mq' | 'lq';

export const getDisplayedImageUrl = (imageUrl: string, quality: ImageQuality) => {
  const qualityResoultionMap: Record<ImageQuality, string> = {
    hd: ',w600',
    hq: ',w400',
    mq: ',w300',
    lq: ',w207h139',
    original: '',
  };

  return imageUrl?.replace(/,w[0-9]+(h[0-9]+)?/g, qualityResoultionMap[quality]);
};

export const getImageQuality = (listMode: boolean, isBlur: boolean): ImageQuality => {
  if (isBlur) return 'mq';
  return listMode ? 'hq' : 'hd';
};

export const getLinkMediaType = (sourceUrl: string): MediaType => {
  if (sourceUrl.includes('gfycat.com')) return 'gfycat';
  if (ReactPlayer.canPlay(sourceUrl)) return 'video';
  return 'image';
};
