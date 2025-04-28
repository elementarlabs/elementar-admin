import { InjectionToken } from '@angular/core';

export interface CarouselApiInterface {
  previous: () => void;
  next: () => void;
  isPreviousDisabled: () => boolean;
  isNextDisabled: () => boolean;
  selectedIndex: () => number;
}

export interface CarouselInterface {
  api: CarouselApiInterface
}

export interface CarouselCardInterface {
  element: HTMLElement;
}

export const CAROUSEL = new InjectionToken('CAROUSEL');
export const CAROUSEL_CARD = new InjectionToken('CAROUSEL_CARD');
