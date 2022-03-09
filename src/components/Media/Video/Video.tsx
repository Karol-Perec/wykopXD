import { Link } from '@mui/material';
import { useMemo, useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import { Link as RouterLink } from 'react-router-dom';
import useIsOnScreen from '../../../hooks/useIsOnScreen';
import { MediaType } from '../../../types';
import * as S from './Video.styles';

type ImageQuality = 'original' | 'hq' | 'mq' | 'lq';
interface VideoProps {
  sourceUrl: string;
  imageUrl: string;
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

const Video = ({ sourceUrl, imageUrl, plus18, aspectRatio, previewQuality }: VideoProps) => {
  const [unblockMaxHeight, setUnblockMaxHeight] = useState(false);
  const mediaContainerRef = useRef<HTMLDivElement>(null);
  const isOnScreen = useIsOnScreen(mediaContainerRef);
  const [enableAutostart, setEnableAutostart] = useState(true);
  const displayedImageUrl = getDisplayedImageUrl(imageUrl, 'hq');

  const enlargeVideo = (event: MouseEvent) => {
    event.stopPropagation();

    if (!mediaContainerRef?.current) return;
    setUnblockMaxHeight(true);
    mediaContainerRef.current.style.maxHeight = '100%';
    mediaContainerRef.current.style.transition = 'maxHeight 0.3s ease-in-out';
  };

  return (
    <S.Container
      ref={mediaContainerRef}
      aspectRatio={aspectRatio}
      unblockMaxHeight={unblockMaxHeight}
    >
      <ReactPlayer
        url={sourceUrl}
        controls
        light={displayedImageUrl}
        width='100%'
        height='100%'
        onClickPreview={enlargeVideo}
        onPlay={() => setEnableAutostart(true)}
        onPause={() => setEnableAutostart(false)}
        playing={enableAutostart && isOnScreen}
      />
    </S.Container>
  );
};

export default Video;
