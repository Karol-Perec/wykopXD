import { MediaType } from 'types';
import useGfycat from '../../hooks/api/useGfycat';
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

  if (type === 'video')
    return (
      <Video
        sourceUrl="https://www.wykop.pl/cdn/c3201142/comment_1653760475D4pL4cX7rIrc5SEyC0uy5b"
        imageUrl={imageUrl}
        plus18={plus18}
        ratio={ratio}
        listMode={listMode}
      />
    );

  if (type === 'gfycat')
    return (
      <Video
        sourceUrl={gfycatSourceUrl!}
        imageUrl={imageUrl}
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
