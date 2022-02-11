export interface Media {
  type: 'video' | 'image';
  url: string;
  previewUrl: string;
  // hqPreviewUrl: string;
  plus18: boolean;
  ratio: number;
}
