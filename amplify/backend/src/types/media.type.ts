export interface Media {
  type: 'video' | 'image';
  url: string;
  previewUrl: string;
  plus18: boolean;
  ratio: number;
}
