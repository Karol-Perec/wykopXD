import ReactPlayer from 'react-player';
import { MediaType } from 'types/media.types';
import Image from './Image/Image';
import Video from './Video/Video';

type ImageQuality = 'original' | 'hq' | 'mq' | 'lq';
interface MediaProps {
  type?: MediaType;
  sourceUrl: string;
  imageUrl: string;
  plus18: boolean;
  aspectRatio?: number;
  previewQuality: ImageQuality;
}

const Media = ({ type, sourceUrl, imageUrl, plus18, aspectRatio, previewQuality }: MediaProps) => {
  const isVideo = type === 'video' || ReactPlayer.canPlay(sourceUrl);

  if (isVideo)
    return (
      <Video
        sourceUrl={sourceUrl}
        imageUrl={imageUrl}
        plus18={plus18}
        aspectRatio={aspectRatio}
        previewQuality={previewQuality}
      />
    );
  return (
    <Image
      sourceUrl={sourceUrl}
      imageUrl={imageUrl}
      plus18={plus18}
      aspectRatio={aspectRatio}
      previewQuality={previewQuality}
    />
  );
};

export default Media;
