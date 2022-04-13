import { useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import useIsOnScreen from 'hooks/useIsOnScreen';
import { getDisplayedImageUrl } from 'utils/imageUtils';
import * as S from './Video.styles';

interface VideoProps {
  sourceUrl: string;
  imageUrl: string;
  plus18: boolean;
  listMode?: boolean;
  aspectRatio?: number;
}

const Video = ({ sourceUrl, imageUrl, plus18, aspectRatio, listMode }: VideoProps) => {
  const [expandedVideo, setExpandedVideo] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const isOnScreen = useIsOnScreen(wrapperRef);
  const [enableAutostop, setEnableAutostop] = useState(false);
  const displayedImageUrl = getDisplayedImageUrl(imageUrl, listMode ? 'mq' : 'original');

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
