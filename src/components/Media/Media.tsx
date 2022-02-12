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

const Media = ({ sourceUrl, previewUrl, linkTo }: MediaProps) => {
  const mediaContainerRef = useRef<HTMLDivElement>(null);
  const displayedPreviewUrl = getDisplayedPreviewUrl(previewUrl, 'hq');

  const media = ReactPlayer.canPlay(sourceUrl) ? (
    <ReactPlayer
      url={sourceUrl}
      controls
      light={displayedPreviewUrl}
      width='100%'
      height='100%'
      onClickPreview={() => enlargeMediaContainer(mediaContainerRef)}
    />
  ) : (
    <Link to={linkTo}>
      {
        displayedPreviewUrl ? <S.PreviewImg src={displayedPreviewUrl} alt={''} /> : null //<S.DefaultPreviewImg />
      }
    </Link>
  );

  return <S.Container ref={mediaContainerRef}>{media}</S.Container>;
};

function enlargeMediaContainer(mediaContainerRef: React.MutableRefObject<HTMLDivElement | null>) {
  if (!mediaContainerRef?.current) return;
  mediaContainerRef.current.style.width = '100%';
  mediaContainerRef.current.style.transition = 'width 0.3s ease-in-out';
}

function getDisplayedPreviewUrl(previewUrl: string, quality: ImageQuality) {
  const imageSizeRegExp = /,w[0-9]+(h[0-9]+)?/g;

  if (quality === 'original') return previewUrl?.replace(imageSizeRegExp, '');
  if (quality === 'hq') return previewUrl?.replace(imageSizeRegExp, ',w400');
  if (quality === 'mq') return previewUrl?.replace(imageSizeRegExp, ',w300h223');
  if (quality === 'lq') return previewUrl?.replace(imageSizeRegExp, ',w207h139');
}

export default Media;
