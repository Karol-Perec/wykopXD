import { Link } from '@mui/material';
import { useRef, useState } from 'react';
import * as S from './Image.styles';

type ImageQuality = 'original' | 'hq' | 'mq' | 'lq';
interface ImageProps {
  sourceUrl: string;
  imageUrl: string;
  plus18: boolean;
  aspectRatio?: number;
  previewQuality: ImageQuality;
}

export const getDisplayedImageUrl = (imageUrl: string, quality: ImageQuality) => {
  const qualityResoultionMap: Record<ImageQuality, string> = {
    hq: ',w400',
    mq: ',w300h223',
    lq: ',w207h139',
    original: '',
  };

  return imageUrl?.replace(/,w[0-9]+(h[0-9]+)?/g, qualityResoultionMap[quality]);
};

const Image = ({ sourceUrl, imageUrl, plus18, aspectRatio, previewQuality }: ImageProps) => {
  const mediaContainerRef = useRef<HTMLDivElement>(null);
  const displayedImageUrl = getDisplayedImageUrl(imageUrl, 'hq');
  const [unblockMaxHeight, setUnblockMaxHeight] = useState(false);

  return (
    <S.Container
      ref={mediaContainerRef}
      aspectRatio={aspectRatio}
      unblockMaxHeight={unblockMaxHeight}
    >
      <Link href={sourceUrl} onClick={(e) => e.preventDefault()}>
        <S.Image src={displayedImageUrl} />
      </Link>
    </S.Container>
  );
};

export default Image;
