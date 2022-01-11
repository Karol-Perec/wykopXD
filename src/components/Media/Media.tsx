import { useRef } from 'react';
import ReactPlayer from 'react-player/lazy';
import { Link } from 'react-router-dom';

import * as S from './Media.styles';

interface MediaProps {
  sourceUrl: string;
  preview: string;
  linkTo: string;
}

export const Media = ({ sourceUrl, preview, linkTo }: MediaProps) => {
  const mediaContainerRef = useRef<HTMLDivElement>(null);
  const hqPreview = preview?.replace('w104h74', 'w207h139');
  const displayedPreview = hqPreview || preview;

  const media = ReactPlayer.canPlay(sourceUrl) ? (
    <ReactPlayer
      url={sourceUrl}
      controls
      light={displayedPreview}
      width='100%'
      height='100%'
      onClickPreview={() => enlargeMediaContainer(mediaContainerRef)}
    />
  ) : (
    <Link to={linkTo}>
      {
        displayedPreview ? (
          <S.PreviewImg src={displayedPreview} alt={''} />
        ) : null //<S.DefaultPreviewImg />
      }
    </Link>
  );

  return <S.Container ref={mediaContainerRef}>{media}</S.Container>;
};

function enlargeMediaContainer(
  mediaContainerRef: React.MutableRefObject<HTMLDivElement | null>
) {
  if (!mediaContainerRef?.current) return;
  mediaContainerRef.current.style.width = '100%';
  mediaContainerRef.current.style.transition = 'width 0.3s ease-in-out';
}
