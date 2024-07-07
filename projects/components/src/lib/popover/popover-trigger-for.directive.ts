import {
  Directive, ElementRef,
  EventEmitter,
  HostListener,
  inject, Injector,
  Input, OnDestroy,
  Output,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';
import {
  ConnectedPosition,
  FlexibleConnectedPositionStrategy, FlexibleConnectedPositionStrategyOrigin,
  Overlay,
  OverlayConfig,
  OverlayRef
} from '@angular/cdk/overlay';
import { fromEvent, merge, Subject, takeUntil } from 'rxjs';
import { Directionality } from '@angular/cdk/bidi';
import { TemplatePortal } from '@angular/cdk/portal';
import { _getEventTarget } from '@angular/cdk/platform';
import { PopoverTrigger, PopoverPosition } from './types';
import { PositionManager } from '../overlay';

@Directive({
  selector: '[emrPopoverTriggerFor]',
  exportAs: 'emrPopoverTriggerFor',
  host: {
    class: 'emr-popover-trigger-for',
    '[class.emr-popover-trigger-for--is-open]': 'api.isOpen()',
  }
})
export class PopoverTriggerForDirective implements  OnDestroy {
  private _overlay = inject(Overlay);
  private _elementRef: ElementRef<HTMLElement> = inject(ElementRef);
  private _directionality = inject(Directionality, { optional: true });
  private _viewContainerRef = inject(ViewContainerRef);
  private _injector = inject(Injector);
  private _popoverPortal!: TemplatePortal;
  private _overlayRef: OverlayRef | null = null;
  private _destroy$: Subject<void> = new Subject();
  private _openTimeout: any = null;
  private _closeTimeout: any = null;
  private _closeDelay = 500;

  @Input('emrPopoverTriggerFor')
  popoverTemplateRef!: TemplateRef<unknown>;

  @Input()
  trigger: PopoverTrigger = 'click';

  @Input()
  position: PopoverPosition = 'below-center';

  @Input()
  delay = 500;

  @Input()
  origin: FlexibleConnectedPositionStrategyOrigin;

  @Output()
  readonly opened = new EventEmitter<void>();

  @Output()
  readonly closed = new EventEmitter<void>();

  constructor() {
    this._setType();
  }

  @HostListener('click', ['$event'])
  _handleClick() {
    if (this.trigger !== 'click') {
      return;
    }

    !this._isOpen() ? this._open() : this._close();
  }

  @HostListener('mouseenter', ['$event'])
  _handleMouseover() {
    if (!this._isOpen() && this.trigger === 'hover') {
      this._openTimeout = setTimeout(() => {
        this._open();
      }, this.delay);
    }
  }

  @HostListener('mouseleave', ['$event'])
  _handleMouseout() {
    if (!this._isOpen()) {
      clearTimeout(this._openTimeout);
    }
  }

  ngOnDestroy() {
    this._close();
    this._destroyOverlay();
  }

  get api() {
    return {
      isOpen: () => this._isOpen(),
      open: () => this._open(),
      close: () => this._close(),
    };
  }

  private _isOpen() {
    return !!this._overlayRef?.hasAttached();
  }

  private _open() {
    if (!this._isOpen() && this.popoverTemplateRef != null) {
      this.opened.emit();
      this._overlayRef = this._overlay.create(this._getOverlayConfig());
      this._overlayRef.attach(this._getPopoverContentPortal());
      this._subscribeToHostMouseleave();
      this._subscribeToOutsideClicks();
    }
  }

  private _close() {
    clearTimeout(this._closeTimeout);
    this.closed.next();
    this._overlayRef!?.detach();
  }

  private _destroyOverlay() {
    clearTimeout(this._openTimeout);
    clearTimeout(this._closeTimeout);
    this._overlayRef?.dispose();
    this._overlayRef = null;
  }

  private _subscribeToOutsideClicks() {
    if (this._overlayRef) {
      this._overlayRef
        .outsidePointerEvents()
        .pipe(
          takeUntil(this._destroy$)
        )
        .subscribe(event => {
          const target = _getEventTarget(event) as Element;
          const element = this._elementRef.nativeElement;

          if (target !== element && !element.contains(target)) {
            this._close();
          }
        })
      ;
    }
  }

  private _getPopoverContentPortal() {
    this._popoverPortal = new TemplatePortal(
      this.popoverTemplateRef,
      this._viewContainerRef,
      null,
      this._injector
    );

    return this._popoverPortal;
  }

  private _getOverlayConfig() {
    return new OverlayConfig({
      positionStrategy: this._getOverlayPositionStrategy(),
      scrollStrategy: this._overlay.scrollStrategies.reposition(),
      direction: this._directionality || undefined
    });
  }

  private _getOverlayPositionStrategy(): FlexibleConnectedPositionStrategy {
    return this._overlay
      .position()
      .flexibleConnectedTo(this.origin ? this.origin : this._elementRef)
      .setOrigin(this.origin ? this.origin : this._elementRef)
      .withGrowAfterOpen()
      .withPositions(this._getOverlayPositions())
    ;
  }

  private _getOverlayPositions(): ConnectedPosition[] {
    return (new PositionManager()).build(this.position);
  }

  private _setType() {
    if (this.trigger === 'hover') {
      return;
    }

    const element = this._elementRef.nativeElement;

    if (element.nodeName === 'BUTTON' && !element.getAttribute('type')) {
      // Prevents form submissions.
      element.setAttribute('type', 'button');
    }
  }

  private _subscribeToHostMouseleave() {
    if (this.trigger === 'hover' && this._overlayRef) {
      fromEvent(this._elementRef.nativeElement, 'mouseleave')
        .pipe(takeUntil(merge(this.closed, this._destroy$)))
        .subscribe(event => {
          this._closeTimeout = setTimeout(() => {
            this._close();
          }, this._closeDelay);
        })
      ;
      const popoverElement = this._overlayRef.overlayElement;
      fromEvent(popoverElement, 'mouseenter')
        .pipe(takeUntil(merge(this.closed, this._destroy$)))
        .subscribe(event => {
          clearTimeout(this._closeTimeout);
          this._closeTimeout = null;
        })
      ;
      fromEvent(popoverElement, 'mouseleave')
        .pipe(takeUntil(merge(this.closed, this._destroy$)))
        .subscribe(event => {
          this._closeTimeout = setTimeout(() => {
            this._close();
          }, this._closeDelay);
        })
      ;
    }
  }
}
