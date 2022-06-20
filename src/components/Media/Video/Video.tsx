import { useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import useIsOnScreen from 'hooks/useIsOnScreen';
import { getDisplayedImageUrl } from 'utils/imageUtils';
import * as S from './Video.styles';
import { stopPropagation } from '../../../utils/windowUtils';

interface VideoProps {
  sourceUrl: string;
  previewUrl: string;
  plus18: boolean;
  listMode?: boolean;
  ratio?: number;
}

const Video = ({ sourceUrl, previewUrl, plus18, ratio, listMode }: VideoProps) => {
  const [expandedVideo, setExpandedVideo] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const isOnScreen = useIsOnScreen(wrapperRef);
  const [autostopEnabled, setAutostopEnabled] = useState(false);
  const displayedPreviewUrl = getDisplayedImageUrl(previewUrl, listMode ? 'mq' : 'hq');

  const expandVideo = stopPropagation(() => setExpandedVideo(true));
  const enableAutostop = () => setAutostopEnabled(true);
  const disableAutostop = () => setAutostopEnabled(false);

  return (
    <S.Container>
      <S.VideoWrapper ref={wrapperRef} ratio={ratio} expandedVideo={expandedVideo}>
        <ReactPlayer
          url={sourceUrl}
          controls
          light={displayedPreviewUrl}
          width='100%'
          height='100%'
          onClickPreview={expandVideo}
          onPlay={enableAutostop}
          onPause={disableAutostop}
          playing={autostopEnabled ? isOnScreen : undefined}
        />
      </S.VideoWrapper>
    </S.Container>
  );
};

export default Video;
