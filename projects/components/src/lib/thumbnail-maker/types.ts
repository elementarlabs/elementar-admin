export interface ThumbnailMakerApi {
  getDataUrl: () => string;
  toBlob: (callback: BlobCallback) => void;
  getCanvas: () => HTMLCanvasElement;
  increase: () => void;
  decrease: () => void;
}
