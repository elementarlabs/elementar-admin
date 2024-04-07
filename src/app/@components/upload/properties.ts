export type UploadFileState = 'uploading' | 'error' | 'uploaded' | string;
export interface UploadSelectedEvent {
  event: any;
  multiple: boolean;
  fileList: FileList | null;
  files: File[];
}
