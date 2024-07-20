import { InjectionToken, TemplateRef } from '@angular/core';
import { PictureRef } from './picture-ref';

export interface PictureOptions {
  sourceUrl: string;
  title?: string | undefined;
  caption?: string | undefined;
  description?: string | undefined;
  titleTplRef?: TemplateRef<any> | undefined;
  captionTplRef?: TemplateRef<any> | undefined;
  descriptionTplRef?: TemplateRef<any> | undefined;
}

export const IMAGE_VIEWER = new InjectionToken('IMAGE_VIEWER');
export const IMAGE_VIEWER_PICTURE_REF = new InjectionToken<PictureRef>('IMAGE_VIEWER_PICTURE_REF');
export const IMAGE_VIEWER_PICTURE_DATA = new InjectionToken<PictureOptions>('IMAGE_VIEWER_PICTURE_DATA');
