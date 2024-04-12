import { InjectionToken } from '@angular/core';

export const ALERT = new InjectionToken('Alert');
export type AlertVariant = 'default' | 'positive' | 'informative' | 'negative' | 'notice' | string;
