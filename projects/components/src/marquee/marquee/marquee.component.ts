import {
  Component,
  ElementRef,
  input,
  viewChild,
  AfterContentInit, inject, PLATFORM_ID, booleanAttribute, OnChanges, SimpleChanges, OnDestroy
} from '@angular/core';
import { isPlatformServer, NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'emr-marquee',
  exportAs: 'emrMarquee',
  standalone: true,
  imports: [
    NgStyle,
    NgClass
  ],
  templateUrl: './marquee.component.html',
  styleUrl: './marquee.component.scss',
  host: {
    'class': 'emr-marquee'
  }
})
export class MarqueeComponent implements AfterContentInit, OnChanges, OnDestroy {
  private _platformId = inject(PLATFORM_ID);
  private _intersectionObserver?: IntersectionObserver;

  containerRef = viewChild.required<ElementRef<HTMLElement>>('container');
  reverse = input(false, {
    transform: booleanAttribute
  });
  animationDuration = input<string>();
  vertical = input(false, {
    transform: booleanAttribute
  });
  pauseOnHover = input(false, {
    transform: booleanAttribute
  });

  protected style: any = {
  };
  protected isInView = false;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['animationDuration']) {
      this.style['--emr-marquee-animation-duration'] = changes['animationDuration'].currentValue;
    }

    if (changes['reverse']) {
      this.style['--emr-marquee-reverse'] = changes['reverse'].currentValue ? 'reverse' : '';
    }

    if (changes['pauseOnHover']) {
      this.style['--emr-marquee-pause'] = changes['pauseOnHover'].currentValue ? 'paused' : 'running';
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
    this._intersectionObserver.observe(this.containerRef().nativeElement);
  }

  ngOnDestroy(): void {
    if (this._intersectionObserver) {
      this._intersectionObserver.disconnect();
    }
  }
}
