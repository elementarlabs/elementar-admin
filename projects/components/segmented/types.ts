import { InjectionToken } from '@angular/core';

export const EMR_SEGMENTED = new InjectionToken('EMR_SEGMENTED');
export type SegmentedTriggerSize = 'sm' | 'default' | 'lg' | string;
