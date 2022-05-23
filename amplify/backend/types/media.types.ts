export type MediaType = 'video' | 'image' | 'gfycat';
export interface Media {
  type: MediaType;
  url: string;
  previewUrl: string;
  plus18: boolean;
  aspectRatio: number;
}
