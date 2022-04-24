type ImageQuality = 'original' | 'hd' | 'hq' | 'mq' | 'lq';

export const getDisplayedImageUrl = (imageUrl: string, quality: ImageQuality) => {
  const qualityResoultionMap: Record<ImageQuality, string> = {
    hd: ',w600',
    hq: ',w400',
    mq: ',w300',
    lq: ',w207',
    original: '',
  };

  return imageUrl?.replace(/,w[0-9]+(h[0-9]+)?/g, qualityResoultionMap[quality]);
};

export const getImageQuality = (listMode: boolean, blur: boolean): ImageQuality => {
  if (blur) return 'lq';
  return listMode ? 'hq' : 'hd';
};
