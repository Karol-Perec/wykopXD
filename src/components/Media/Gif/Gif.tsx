import { useState } from 'react';
import { getDisplayedImageUrl, getImageQuality } from '~/utils/mediaUtils';
import { stopPropagation } from '~/utils/windowUtils';
import * as S from './Gif.styles';

interface GifProps {
  sourceUrl: string;
  imageUrl: string;
  adult: boolean;
  listMode: boolean;
  ratio?: number;
}

const Gif = ({ sourceUrl, imageUrl, adult, ratio, listMode }: GifProps) => {
  const [isBlurred, setIsBlurred] = useState(adult);
  const [isPlaying, setIsPlaying] = useState(false);
  const displayedImageUrl = getDisplayedImageUrl(imageUrl, getImageQuality(listMode, isBlurred));

  const handleUnblurGif = stopPropagation(() => {
    setIsBlurred(false);
    setIsPlaying((prev) => !prev);
  });

  const handleStopGif = stopPropagation(() => setIsPlaying((prev) => !prev));

  const gif = (
    <S.GifContainer>
      <S.Gif
        src={isPlaying ? sourceUrl : displayedImageUrl}
        blur={isBlurred}
        onClick={isBlurred ? handleUnblurGif : handleStopGif}
        draggable={!isBlurred}
      />
    </S.GifContainer>
  );

  return <S.Container>{listMode || isBlurred ? gif : <a href={sourceUrl}>{gif}</a>}</S.Container>;
};

export default Gif;
