import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { getDisplayedImageUrl, getImageQuality } from 'utils/imageUtils';
import { stopPropagation } from 'utils/windowUtils';
import { RouterNoPropagationLink } from '../../UI/CustomLinks';
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
  const displayedImageUrl = getDisplayedImageUrl(imageUrl, getImageQuality(listMode, isBlurred));

  const handleUnblurImage = stopPropagation(() => setIsBlurred(false));

  const image = (
    <S.ImageContainer>
      <S.Image
        src={displayedImageUrl}
        blur={isBlurred}
        onClick={isBlurred ? handleUnblurImage : undefined}
        draggable={!isBlurred}
      />
    </S.ImageContainer>
  );

  const imageWithLink =
    sourceUrl.startsWith('https://www.wykop.pl/wpis') ||
    sourceUrl.startsWith('https://www.wykop.pl/link') ? (
      <RouterNoPropagationLink to={sourceUrl.replace('https://www.wykop.pl', '')}>
        {image}
      </RouterNoPropagationLink>
    ) : (
      <a href={sourceUrl}>{image}</a>
    );

  return <S.Container>{listMode || isBlurred ? image : imageWithLink}</S.Container>;
};

export default Image;
