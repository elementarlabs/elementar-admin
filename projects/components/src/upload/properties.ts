export type UploadFileState = 'uploading' | 'error' | 'uploaded' | string;
export interface UploadFileSelectedEvent {
  event: any;
  multiple: boolean;
  fileList: FileList | null;
  files: File[];
}
