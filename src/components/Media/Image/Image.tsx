import { Link } from '@mui/material';
import { useRef, useState } from 'react';
import { getDisplayedImageUrl, getImageQuality } from 'utils/imageUtils';
import * as S from './Image.styles';

interface ImageProps {
  sourceUrl: string;
  imageUrl: string;
  plus18: boolean;
  listMode: boolean;
  aspectRatio?: number;
}

const Image = ({ sourceUrl, imageUrl, plus18, aspectRatio, listMode }: ImageProps) => {
  const [unblockMaxHeight, setUnblockMaxHeight] = useState(false);
  const [blurImage, setBlurImage] = useState(plus18);

  const mediaContainerRef = useRef<HTMLDivElement>(null);
  const displayedImageUrl = getDisplayedImageUrl(imageUrl, getImageQuality(listMode, blurImage));

  const image = blurImage ? (
    <S.Image
      src={displayedImageUrl}
      blur={blurImage}
      alt=''
      onClick={(e) => {
        e.stopPropagation();
        setBlurImage(false);
      }}
    />
  ) : (
    <Link href={sourceUrl} onClick={(e) => e.preventDefault()}>
      <S.Image src={displayedImageUrl} blur={blurImage} alt='' />
    </Link>
  );

  return (
    <S.Container
      ref={mediaContainerRef}
      aspectRatio={aspectRatio}
      unblockMaxHeight={unblockMaxHeight}
    >
      {image}
    </S.Container>
  );
};

export default Image;
