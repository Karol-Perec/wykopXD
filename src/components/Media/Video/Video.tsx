import { useMediaQuery } from '@mui/material';
import useGfycat from '~/api/useGfycat';
import { getDisplayedImageUrl } from '~/utils/mediaUtils';
import { DesktopPlayer, MobilePlayer, PlayerProps } from './Player';
import * as S from './Video.styles';

interface VideoProps extends PlayerProps {
  listMode?: boolean;
  ratio?: number;
  isGfycat: boolean;
}

const Video = ({ sourceUrl, previewUrl, plus18, ratio, listMode, isGfycat }: VideoProps) => {
  const { data: gfycatSourceUrl } = useGfycat(sourceUrl, isGfycat);
  const displayedPreviewUrl = getDisplayedImageUrl(previewUrl, listMode ? 'mq' : 'hq');
  const isMobile = useMediaQuery('(pointer:coarse)');
  const Player = isMobile ? MobilePlayer : DesktopPlayer;

  return (
    <S.Container>
      <Player
        sourceUrl={isGfycat ? gfycatSourceUrl! : sourceUrl}
        plus18={plus18}
        previewUrl={displayedPreviewUrl}
        ratio={ratio}
      />
    </S.Container>
  );
};

export default Video;
