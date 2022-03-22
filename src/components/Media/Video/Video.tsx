import { useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import useIsOnScreen from 'hooks/useIsOnScreen';
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
  const [expandedVideo, setExpandedVideo] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const isOnScreen = useIsOnScreen(wrapperRef);
  const [enableAutostop, setEnableAutostop] = useState(false);
  const displayedImageUrl = getDisplayedImageUrl(imageUrl, 'hq');

  const expandVideo = (event: MouseEvent) => {
    event.stopPropagation();
    setExpandedVideo(true);
  };

  return (
    <S.Container>
      <S.VideoWrapper ref={wrapperRef} aspectRatio={aspectRatio} expandedVideo={expandedVideo}>
        <ReactPlayer
          url={sourceUrl}
          controls
          light={displayedImageUrl}
          width='100%'
          height='100%'
          onClickPreview={expandVideo}
          onPlay={() => setEnableAutostop(true)}
          onPause={() => setEnableAutostop(false)}
          playing={enableAutostop ? isOnScreen : undefined}
        />
      </S.VideoWrapper>
    </S.Container>
  );
};

export default Video;
