import { useRef } from 'react';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import * as S from './Media.styles';

type ImageQuality = 'original' | 'hq' | 'mq' | 'lq';
interface MediaProps {
  sourceUrl: string;
  previewUrl: string;
  linkTo: string;
  previewQuality: ImageQuality;
}

export const getDisplayedPreviewUrl = (previewUrl: string, quality: ImageQuality) => {
  const qualityResoultionMap: Record<ImageQuality, string> = {
    hq: ',w400',
    mq: ',w300h223',
    lq: ',w207h139',
    original: '',
  };

  return previewUrl?.replace(/,w[0-9]+(h[0-9]+)?/g, qualityResoultionMap[quality]);
};

const Media = ({ sourceUrl, previewUrl, linkTo, previewQuality }: MediaProps) => {
  const mediaContainerRef = useRef<HTMLDivElement>(null);
  const displayedPreviewUrl = getDisplayedPreviewUrl(previewUrl, 'hq');

  const enlargeMediaContainer = (event: MouseEvent) => {
    event.stopPropagation();
    if (!mediaContainerRef?.current) return;
    mediaContainerRef.current.style.width = '100%';
    mediaContainerRef.current.style.transition = 'width 0.3s ease-in-out';
  };

  const media = ReactPlayer.canPlay(sourceUrl) ? (
    <ReactPlayer
      url={sourceUrl}
      controls
      light={displayedPreviewUrl}
      width='100%'
      height='100%'
      onClickPreview={enlargeMediaContainer}
    />
  ) : (
    <Link to={linkTo}>
      {displayedPreviewUrl ? (
        <S.PreviewImg src={displayedPreviewUrl} alt='' />
      ) : (
        <S.DefaultPreviewImg />
      )}
    </Link>
  );

  return <S.Container ref={mediaContainerRef}>{media}</S.Container>;
};

export default Media;
