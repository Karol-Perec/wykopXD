import { MediaType } from 'types';
import useGfycat from '../../hooks/api/useGfycat';
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
  const { data: gfycatSourceUrl } = useGfycat(sourceUrl, type === 'gfycat');

  if (type === 'gif') {
    return (
      <Gif
        sourceUrl={sourceUrl}
        imageUrl={imageUrl}
        plus18={plus18}
        ratio={ratio}
        listMode={listMode}
      />
    );
  }

  if (type === 'video')
    return (
      <Video
        sourceUrl={sourceUrl}
        previewUrl={imageUrl}
        plus18={plus18}
        ratio={ratio}
        listMode={listMode}
      />
    );

  if (type === 'gfycat')
    return (
      <Video
        sourceUrl={gfycatSourceUrl!}
        previewUrl={imageUrl}
        plus18={plus18}
        ratio={ratio}
        listMode={listMode}
      />
    );

  return (
    <Image
      sourceUrl={sourceUrl}
      imageUrl={imageUrl}
      plus18={plus18}
      ratio={ratio}
      listMode={listMode}
    />
  );
};

export default Media;
