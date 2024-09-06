import {
  Component,
  ContentChildren,
  ElementRef,
  Input,
  QueryList,
  input,
  viewChild,
  AfterViewInit, AfterContentInit, inject, PLATFORM_ID
} from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Subject, takeUntil } from 'rxjs';
import { MarqueeItemDirective } from '@elementar/components/marquee/marquee-item.directive';
import { isPlatformServer, NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'emr-marquee',
  standalone: true,
  imports: [
    NgStyle,
    NgClass
  ],
  templateUrl: './marquee.component.html',
  styleUrl: './marquee.component.scss'
})
export class MarqueeComponent implements AfterContentInit {
  private _platformId = inject(PLATFORM_ID);

  containerRef = viewChild.required<ElementRef<HTMLElement>>('container');

  @ContentChildren(MarqueeItemDirective)
  elementRefs?: QueryList<ElementRef<HTMLElement>>;

  styleClass = input();

  @Input("reverse")
  set reverse(reverse: boolean) {
    if (reverse) {
      this.style["--emr-marquee-reverse"] = "reverse";
      return;
    }

    this.style["--emr-marquee-reverse"] = "";
  }

  @Input("animationDuration")
  set animationDuration(animationDuration: string) {
    this.style["--emr-marquee-animation-duration"] = animationDuration;
  }

  @Input("marqueeGap")
  set marqueeGap(marqueeGap: string) {
    this.style["--emr-marquee-gap"] = marqueeGap;
  }

  @Input("pauseOnHover")
  set pauseOnHover(pauseOnHover: boolean) {
    if (pauseOnHover) {
      this.style["--emr-marquee-pause"] = "paused";
      return;
    }

    this.style["--emr-marquee-pause"] = "running";
  }

  @Input("vertical")
  vertical = false;

  style: any = {};

  marqueeElements: SafeHtml[] = [];

  isInView = false;
  private intersectionObserver?: IntersectionObserver;

  constructor(private readonly sanitizer: DomSanitizer) {
  }

  ngAfterContentInit(): void {
    if (isPlatformServer(this._platformId)) {
      return;
    }

    this.getMarqueeContent();

    this.elementRefs?.changes.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.getMarqueeContent();
    });

    this.intersectionObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        if (!this.isInView) {
          this.isInView = true;
        }
      } else if (this.isInView) {
        this.isInView = false;
      }
    });
    this.intersectionObserver.observe(this.containerRef().nativeElement);
  }

  destroy$ = new Subject<void>();

  ngOnDestroy(): void {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
    }

    this.destroy$.next();
    this.destroy$.complete();
  }

  private getMarqueeContent(): void {
    if (!this.elementRefs) {
      return;
    }

    this.marqueeElements = this.elementRefs?.toArray().map((ref) => {
      return this.sanitizer.bypassSecurityTrustHtml(
        ref.nativeElement.outerHTML
      );
    });
  }
}
