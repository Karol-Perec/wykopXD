export type MediaType = 'video' | 'image';
export interface Media {
  type: MediaType;
  url: string;
  previewUrl: string;
  plus18: boolean;
  aspectRatio: number;
}
