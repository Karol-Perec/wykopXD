import { Link } from '@mui/material';
import { useRef, useState } from 'react';
import { getDisplayedImageUrl, getImageQuality } from 'utils/imageUtils';
import { handleStopPropagation, stopPropagation } from '../../../utils/windowUtils';
import * as S from './Image.styles';

interface ImageProps {
  sourceUrl: string;
  imageUrl: string;
  plus18: boolean;
  listMode: boolean;
  ratio?: number;
}

const Image = ({ sourceUrl, imageUrl, plus18, ratio, listMode }: ImageProps) => {
  const [unblockMaxHeight, setUnblockMaxHeight] = useState(false);
  const [isBlurred, setIsBlurred] = useState(plus18);

  const mediaContainerRef = useRef<HTMLDivElement>(null);
  const displayedImageUrl = getDisplayedImageUrl(imageUrl, getImageQuality(listMode, isBlurred));

  const handleUnblurImage = stopPropagation(() => setIsBlurred(false));

  const image = isBlurred ? (
    <S.Image src={displayedImageUrl} blur={isBlurred} alt='+18 image' onClick={handleUnblurImage} />
  ) : (
    <Link href={sourceUrl} onClick={handleStopPropagation}>
      <S.Image src={displayedImageUrl} blur={isBlurred} alt='' />
    </Link>
  );

  return (
    <S.Container ref={mediaContainerRef} ratio={ratio} unblockMaxHeight={unblockMaxHeight}>
      {image}
    </S.Container>
  );
};

export default Image;
