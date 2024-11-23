import {
  Component,
  ElementRef,
  input,
  viewChild,
  AfterContentInit,
  inject,
  PLATFORM_ID,
  booleanAttribute,
  OnChanges,
  SimpleChanges,
  OnDestroy, OnInit
} from '@angular/core';
import { isPlatformServer } from '@angular/common';

@Component({
    selector: 'emr-marquee',
    exportAs: 'emrMarquee',
    imports: [],
    templateUrl: './marquee.component.html',
    styleUrl: './marquee.component.scss',
    host: {
        'class': 'emr-marquee'
    }
})
export class MarqueeComponent implements AfterContentInit, OnChanges, OnDestroy {
  private _elementRef = inject(ElementRef);
  private _platformId = inject(PLATFORM_ID);
  private _intersectionObserver?: IntersectionObserver;

  reverse = input(false, {
    transform: booleanAttribute
  });
  pauseOnHover = input(false, {
    transform: booleanAttribute
  });

  protected isInView = false;

  protected get nativeElement(): HTMLElement {
    return this._elementRef.nativeElement;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['reverse']) {
      this.nativeElement.style.setProperty('--emr-marquee-reverse', changes['reverse'].currentValue ? 'reverse' : '');
    }

    if (changes['pauseOnHover']) {
      this.nativeElement.style.setProperty('--emr-marquee-pause', changes['pauseOnHover'].currentValue ? 'paused' : 'running');
    }
  }

  ngAfterContentInit(): void {
    if (isPlatformServer(this._platformId)) {
      return;
    }

    this._intersectionObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        if (!this.isInView) {
          this.isInView = true;
        }
      } else if (this.isInView) {
        this.isInView = false;
      }
    });
    this._intersectionObserver.observe(this.nativeElement);
  }

  ngOnDestroy(): void {
    if (this._intersectionObserver) {
      this._intersectionObserver.disconnect();
    }
  }
}
