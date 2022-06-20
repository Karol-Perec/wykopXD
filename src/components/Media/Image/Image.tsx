import { useRef, useState } from 'react';
import { getDisplayedImageUrl, getImageQuality } from 'utils/imageUtils';
import { stopPropagation } from 'utils/windowUtils';
import * as S from './Image.styles';

interface ImageProps {
  sourceUrl: string;
  imageUrl: string;
  plus18: boolean;
  listMode: boolean;
  ratio?: number;
}

const Image = ({ sourceUrl, imageUrl, plus18, ratio, listMode }: ImageProps) => {
  const [isBlurred, setIsBlurred] = useState(plus18);

  const mediaContainerRef = useRef<HTMLDivElement>(null);
  const displayedImageUrl = getDisplayedImageUrl(imageUrl, getImageQuality(listMode, isBlurred));

  const handleUnblurImage = stopPropagation(() => setIsBlurred(false));

  const image = (
    <S.BlurredImageContainer>
      <S.Image
        src={displayedImageUrl}
        blur={isBlurred}
        onClick={handleUnblurImage}
        draggable={!isBlurred}
      />
    </S.BlurredImageContainer>
  );

  return (
    <S.Container ref={mediaContainerRef}>
      {listMode || isBlurred ? image : <a href={sourceUrl}>{image}</a>}
    </S.Container>
  );
};

export default Image;
