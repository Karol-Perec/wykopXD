import { Link } from '@mui/material';
import { useRef, useState } from 'react';
import { getDisplayedImageUrl } from 'utils/imageUtils';
import * as S from './Image.styles';

interface ImageProps {
  sourceUrl: string;
  imageUrl: string;
  plus18: boolean;
  aspectRatio?: number;
  listMode?: boolean;
}

const Image = ({ sourceUrl, imageUrl, plus18, aspectRatio, listMode }: ImageProps) => {
  const mediaContainerRef = useRef<HTMLDivElement>(null);
  const displayedImageUrl = getDisplayedImageUrl(imageUrl, listMode ? 'hq' : 'original');
  const [unblockMaxHeight, setUnblockMaxHeight] = useState(false);

  return (
    <S.Container
      ref={mediaContainerRef}
      aspectRatio={aspectRatio}
      unblockMaxHeight={unblockMaxHeight}
    >
      <Link href={sourceUrl} onClick={(e) => e.preventDefault()}>
        <S.Image src={displayedImageUrl} alt='' />
      </Link>
    </S.Container>
  );
};

export default Image;
