export type MediaType = 'video' | 'image' | 'gif' | 'gfycat';

export interface Media {
  type: MediaType;
  url: string;
  previewUrl: string;
  plus18: boolean;
  ratio: number;
}
