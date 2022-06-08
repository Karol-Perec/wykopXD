import { useRef, useState } from 'react';
import { getDisplayedImageUrl, getImageQuality } from 'utils/imageUtils';
import { stopPropagation } from '../../../utils/windowUtils';
import * as S from './Gif.styles';

interface GifProps {
  sourceUrl: string;
  imageUrl: string;
  plus18: boolean;
  listMode: boolean;
  ratio?: number;
}

const Gif = ({ sourceUrl, imageUrl, plus18, ratio, listMode }: GifProps) => {
  const [unblockMaxHeight, setUnblockMaxHeight] = useState(false);
  const [isBlurred, setIsBlurred] = useState(plus18);
  const [isPlaying, setIsPlaying] = useState(false);

  const mediaContainerRef = useRef<HTMLDivElement>(null);
  const displayedImageUrl = getDisplayedImageUrl(imageUrl, getImageQuality(listMode, isBlurred));

  const handleUnblurImage = stopPropagation(() => {
    setIsBlurred(false);
    setIsPlaying((prev) => !prev);
  });

  const handleStopGif = stopPropagation(() => setIsPlaying((prev) => !prev));

  const gif = isBlurred ? (
    <S.Gif
      src={isPlaying ? sourceUrl : getDisplayedImageUrl(imageUrl, 'lq')}
      blur={isBlurred}
      alt='+18 image'
      onClick={handleUnblurImage}
    />
  ) : (
    <S.Gif
      src={isPlaying ? sourceUrl : displayedImageUrl}
      blur={isBlurred}
      alt=''
      onClick={handleStopGif}
    />
  );

  return (
    <S.Container ref={mediaContainerRef} ratio={ratio} unblockMaxHeight={unblockMaxHeight}>
      {listMode ? gif : <a href={sourceUrl}>{gif}</a>}
    </S.Container>
  );
};

export default Gif;
