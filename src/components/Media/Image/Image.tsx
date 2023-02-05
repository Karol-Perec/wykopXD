import { useState } from 'react';
import { getDisplayedImageUrl, getImageQuality } from '~/utils/mediaUtils';
import { OVERRIDEABLE_WYKOP_LINK_REGEX } from '~/utils/regex';
import { stopPropagation } from '~/utils/windowUtils';
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

  const imageWithLink = sourceUrl.match(OVERRIDEABLE_WYKOP_LINK_REGEX) ? (
    <RouterNoPropagationLink to={sourceUrl.split('wykop.pl')[1]}>{image}</RouterNoPropagationLink>
  ) : (
    <a href={sourceUrl}>{image}</a>
  );

  return <S.Container>{listMode || isBlurred ? image : imageWithLink}</S.Container>;
};

export default Image;
