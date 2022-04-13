type ImageQuality = 'original' | 'hq' | 'mq' | 'lq';

export const getDisplayedImageUrl = (imageUrl: string, quality: ImageQuality) => {
  const qualityResoultionMap: Record<ImageQuality, string> = {
    hq: ',w400',
    mq: ',w300h223',
    lq: ',w207h139',
    original: '',
  };

  return imageUrl?.replace(/,w[0-9]+(h[0-9]+)?/g, qualityResoultionMap[quality]);
};

export const getImageQuality = (listMode: boolean, blur: boolean): ImageQuality => {
  if (blur) return 'lq';
  return listMode ? 'hq' : 'original';
};
