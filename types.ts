export interface TerminalLog {
  id: string;
  type: 'info' | 'success' | 'warning' | 'process';
  message: string;
  timestamp: string;
}

export enum AspectRatio {
  SQUARE = '1:1',
  PORTRAIT = '9:16',
  LANDSCAPE = '16:9',
  STANDARD_LANDSCAPE = '4:3',
  STANDARD_PORTRAIT = '3:4'
}

export enum ImageSize {
  K1 = '1K',
  K2 = '2K',
  K4 = '4K'
}

export interface GeneratedMedia {
  url: string;
  type: 'image' | 'video';
  prompt: string;
}
