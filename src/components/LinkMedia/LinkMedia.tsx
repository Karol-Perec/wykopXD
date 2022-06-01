import { MouseEventHandler, useRef } from 'react';
import ReactPlayer from 'react-player';
import { Link as RouterLink } from 'react-router-dom';
import useIsOnScreen from 'hooks/useIsOnScreen';
import { MediaType } from 'types';
import { stopPropagation, stopPropagationHandler } from 'utils/windowUtils';
import * as S from './LinkMedia.styles';

type ImageQuality = 'original' | 'hq' | 'mq' | 'lq';

interface LinkMediaProps {
  type?: MediaType;
  sourceUrl: string;
  imageUrl: string;
  linkTo: string;
  plus18: boolean;
  aspectRatio?: number;
  previewQuality: ImageQuality;
}

export const getDisplayedImageUrl = (imageUrl: string, quality: ImageQuality) => {
  const qualityResoultionMap: Record<ImageQuality, string> = {
    hq: ',w400',
    mq: ',w300h223',
    lq: ',w207h139',
    original: '',
  };

  return imageUrl?.replace(/,w[0-9]+(h[0-9]+)?/g, qualityResoultionMap[quality]);
};

const LinkMedia = ({
  type,
  sourceUrl,
  imageUrl,
  linkTo,
  plus18,
  aspectRatio,
  previewQuality,
}: LinkMediaProps) => {
  const mediaContainerRef = useRef<HTMLDivElement>(null);
  const isOnScreen = useIsOnScreen(mediaContainerRef);
  const displayedImageUrl = getDisplayedImageUrl(imageUrl, 'hq');
  const isVideo = type === 'video' || ReactPlayer.canPlay(sourceUrl);

  const enlargeVideo = stopPropagation(() => {
    if (!mediaContainerRef?.current) return;
    mediaContainerRef.current.style.width = '100%';
    mediaContainerRef.current.style.transition = 'width 0.3s ease-in-out';
  });

  const media = isVideo ? (
    <ReactPlayer
      url={sourceUrl}
      controls
      light={displayedImageUrl}
      width='100%'
      height='100%'
      onClickPreview={enlargeVideo}
      playing={isOnScreen}
    />
  ) : (
    <RouterLink to={linkTo} onClick={stopPropagationHandler}>
      {displayedImageUrl ? <S.Image src={displayedImageUrl} /> : <S.DefaultImage />}
    </RouterLink>
  );

  return (
    <S.Container ref={mediaContainerRef} aspectRatio={aspectRatio}>
      {media}
    </S.Container>
  );
};

export default LinkMedia;
