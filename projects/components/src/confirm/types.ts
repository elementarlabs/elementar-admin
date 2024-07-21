import { InjectionToken } from '@angular/core';

export interface ConfirmOptions {
  title: string;
  description?: string;
}

export const CONFIRM_REF = new InjectionToken('CONFIRM_REF');
export const CONFIRM_DATA = new InjectionToken('CONFIRM_DATA');
