import { useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import useIsOnScreen from '~/hooks/useIsOnScreen';
import * as S from './Video.styles';

export interface PlayerProps {
  sourceUrl: string;
  previewUrl: string;
  plus18: boolean;
  ratio?: number;
}

export const DesktopPlayer = ({ sourceUrl, previewUrl, plus18, ratio }: PlayerProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const isOnScreen = useIsOnScreen(wrapperRef);
  const [autostopEnabled, setAutostopEnabled] = useState(false);

  const handleEnableAutostop = () => setAutostopEnabled(true);
  const handleDisableAutostop = () => setAutostopEnabled(false);

  return (
    <S.VideoWrapper ref={wrapperRef} ratio={ratio}>
      <ReactPlayer
        url={sourceUrl}
        controls
        light={previewUrl}
        width='100%'
        height='100%'
        onClickPreview={handleEnableAutostop}
        onPlay={handleEnableAutostop}
        onPause={handleDisableAutostop}
        playing={autostopEnabled ? isOnScreen : undefined}
      />
    </S.VideoWrapper>
  );
};

export const MobilePlayer = ({ sourceUrl, previewUrl, plus18, ratio }: PlayerProps) => (
  <S.VideoWrapper ratio={ratio}>
    <ReactPlayer url={sourceUrl} controls light={previewUrl} width='100%' height='100%' />
  </S.VideoWrapper>
);
