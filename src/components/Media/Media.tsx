import ReactPlayer from 'react-player';
import { MediaType } from 'types/media.types';
import Image from './Image/Image';
import Video from './Video/Video';

interface MediaProps {
  type?: MediaType;
  sourceUrl: string;
  imageUrl: string;
  plus18: boolean;
  listMode: boolean;
  aspectRatio?: number;
}

const Media = ({ type, sourceUrl, imageUrl, plus18, aspectRatio, listMode }: MediaProps) => {
  const isVideo = type === 'video' || ReactPlayer.canPlay(sourceUrl);

  if (isVideo)
    return (
      <Video
        sourceUrl={sourceUrl}
        imageUrl={imageUrl}
        plus18={plus18}
        aspectRatio={aspectRatio}
        listMode={listMode}
      />
    );
  return (
    <Image
      sourceUrl={sourceUrl}
      imageUrl={imageUrl}
      plus18={plus18}
      aspectRatio={aspectRatio}
      listMode={listMode}
    />
  );
};

export default Media;
