import { MediaType } from '~/types';
import Gif from './Gif/Gif';
import Image from './Image/Image';
import Video from './Video/Video';

interface MediaProps {
  type?: MediaType | string;
  sourceUrl: string;
  imageUrl: string;
  adult: boolean;
  listMode?: boolean;
  ratio?: number;
}

const Media = ({ type, sourceUrl, imageUrl, adult, ratio, listMode = false }: MediaProps) => {
  switch (type) {
    case 'gif':
      return <Gif sourceUrl={sourceUrl} imageUrl={imageUrl} adult={adult} ratio={ratio} listMode={listMode} />;
    case 'video':
    case 'gfycat':
      return (
        <Video
          sourceUrl={sourceUrl}
          previewUrl={imageUrl}
          adult={adult}
          ratio={ratio}
          listMode={listMode}
          isGfycat={type === 'gfycat'}
        />
      );
    default:
      return <Image sourceUrl={sourceUrl} imageUrl={imageUrl} adult={adult} ratio={ratio} listMode={listMode} />;
  }
};

export default Media;
