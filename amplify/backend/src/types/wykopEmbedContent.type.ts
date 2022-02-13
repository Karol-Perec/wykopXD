export interface WykopEmbedContent {
  type: 'video' | 'image';
  url: string;
  source: string;
  preview: string;
  plus18: boolean;
  size?: string;
  animated: boolean;
  ratio: number;
}
