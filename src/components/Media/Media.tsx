import { MediaType } from 'types';
import Gif from './Gif/Gif';
import Image from './Image/Image';
import Video from './Video/Video';

interface MediaProps {
  type?: MediaType;
  sourceUrl: string;
  imageUrl: string;
  plus18: boolean;
  listMode: boolean;
  ratio?: number;
}

const Media = ({ type, sourceUrl, imageUrl, plus18, ratio, listMode }: MediaProps) => {
  switch (type) {
    case 'gif':
      return (
        <Gif
          sourceUrl={sourceUrl}
          imageUrl={imageUrl}
          plus18={plus18}
          ratio={ratio}
          listMode={listMode}
        />
      );
    case 'video':
    case 'gfycat':
      return (
        <Video
          sourceUrl={sourceUrl}
          previewUrl={imageUrl}
          plus18={plus18}
          ratio={ratio}
          listMode={listMode}
          isGfycat={type === 'gfycat'}
        />
      );
    default:
      return (
        <Image
          sourceUrl={sourceUrl}
          imageUrl={imageUrl}
          plus18={plus18}
          ratio={ratio}
          listMode={listMode}
        />
      );
  }
};

export default Media;
