import { useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import { Link as RouterLink } from 'react-router-dom';
import useIsOnScreen from '../../hooks/useIsOnScreen';
import * as S from './Media.styles';

type ImageQuality = 'original' | 'hq' | 'mq' | 'lq';
interface MediaProps {
  sourceUrl: string;
  previewUrl: string;
  linkTo: string;
  previewQuality: ImageQuality;
}

export const getDisplayedPreviewUrl = (previewUrl: string, quality: ImageQuality) => {
  const qualityResoultionMap: Record<ImageQuality, string> = {
    hq: ',w400',
    mq: ',w300h223',
    lq: ',w207h139',
    original: '',
  };

  return previewUrl?.replace(/,w[0-9]+(h[0-9]+)?/g, qualityResoultionMap[quality]);
};

const Media = ({ sourceUrl, previewUrl, linkTo, previewQuality }: MediaProps) => {
  const [isLargeVideo, setIsLargeVideo] = useState(false);
  const mediaContainerRef = useRef<HTMLDivElement>(null);
  const isOnScreen = useIsOnScreen(mediaContainerRef);
  const displayedPreviewUrl = getDisplayedPreviewUrl(previewUrl, 'hq');

  const enlargeVideo = (event: MouseEvent) => {
    event.stopPropagation();
    setIsLargeVideo(true);
    if (!mediaContainerRef?.current) return;
    mediaContainerRef.current.style.width = '100%';
    mediaContainerRef.current.style.transition = 'width 0.3s ease-in-out';
  };

  const media = ReactPlayer.canPlay(sourceUrl) ? (
    <ReactPlayer
      url={sourceUrl}
      controls
      light={displayedPreviewUrl}
      width='100%'
      height='100%'
      onClickPreview={enlargeVideo}
      playing={isOnScreen}
    />
  ) : (
    <RouterLink to={linkTo} onClick={(e) => e.stopPropagation()}>
      {displayedPreviewUrl ? <S.PreviewImg src={displayedPreviewUrl} /> : <S.DefaultPreviewImg />}
    </RouterLink>
  );

  return (
    <S.Container ref={mediaContainerRef} unblockMaxWidth={isLargeVideo}>
      {media}
    </S.Container>
  );
};

export default Media;
