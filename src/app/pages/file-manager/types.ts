export interface File {
  id: string;
  size: number;
  type: 'folder' | 'image' | 'archive' | 'any',
  name: string,
  isShared: boolean,
  itemsCount: number,
  extension?: string;
  thumbnailUrl?: string;
}

export interface FileSelectedEvent {
  files: File[]
}
