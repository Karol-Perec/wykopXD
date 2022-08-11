import { useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import useGfycat from 'hooks/api/useGfycat';
import useIsOnScreen from 'hooks/useIsOnScreen';
import { getDisplayedImageUrl } from 'utils/mediaUtils';
import * as S from './Video.styles';

interface VideoProps {
  sourceUrl: string;
  previewUrl: string;
  plus18: boolean;
  listMode?: boolean;
  ratio?: number;
  isGfycat: boolean;
}

const Video = ({ sourceUrl, previewUrl, plus18, ratio, listMode, isGfycat }: VideoProps) => {
  const { data: gfycatSourceUrl } = useGfycat(sourceUrl, isGfycat);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const isOnScreen = useIsOnScreen(wrapperRef);
  const [autostopEnabled, setAutostopEnabled] = useState(false);
  const displayedPreviewUrl = getDisplayedImageUrl(previewUrl, listMode ? 'mq' : 'hq');

  const handleEnableAutostop = () => setAutostopEnabled(true);
  const handleDisableAutostop = () => setAutostopEnabled(false);

  return (
    <S.Container>
      <S.VideoWrapper ref={wrapperRef} ratio={ratio}>
        <ReactPlayer
          url={isGfycat ? gfycatSourceUrl : sourceUrl}
          controls
          light={displayedPreviewUrl}
          width='100%'
          height='100%'
          onClickPreview={handleEnableAutostop}
          onPlay={handleEnableAutostop}
          onPause={handleDisableAutostop}
          playing={autostopEnabled ? isOnScreen : undefined}
        />
      </S.VideoWrapper>
    </S.Container>
  );
};

export default Video;
