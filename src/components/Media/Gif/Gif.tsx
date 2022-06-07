import { Link } from '@mui/material';
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
  const [isPlaying, setIsPlaying] = useState(plus18);

  const mediaContainerRef = useRef<HTMLDivElement>(null);
  const displayedImageUrl = getDisplayedImageUrl(imageUrl, getImageQuality(listMode, isBlurred));

  const handleUnblurImage = stopPropagation(() => {
    setIsBlurred(false);
    setIsPlaying(true);
  });

  const handleStopGif = stopPropagation(() => setIsPlaying(false));

  const image = isBlurred ? (
    <S.Image
      src={isPlaying ? displayedImageUrl : sourceUrl}
      blur={isBlurred}
      alt='+18 image'
      onClick={handleUnblurImage}
    />
  ) : (
    <Link href={sourceUrl} onClick={handleStopGif}>
      <S.Image src={isPlaying ? displayedImageUrl : sourceUrl} blur={isBlurred} alt='' />
    </Link>
  );

  return (
    <S.Container ref={mediaContainerRef} ratio={ratio} unblockMaxHeight={unblockMaxHeight}>
      {image}
    </S.Container>
  );
};

export default Gif;
