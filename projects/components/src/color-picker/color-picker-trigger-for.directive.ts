import {
  Directive,
  ElementRef,
  EventEmitter, HostListener,
  inject, Injector,
  Input,
  Output,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';
import {
  ConnectedPosition,
  FlexibleConnectedPositionStrategy,
  Overlay,
  OverlayConfig,
  OverlayRef
} from '@angular/cdk/overlay';
import { Directionality } from '@angular/cdk/bidi';
import { TemplatePortal } from '@angular/cdk/portal';
import { Subject, takeUntil } from 'rxjs';
import { _getEventTarget } from '@angular/cdk/platform';
import { PositionManager } from './position-manager';
import { ColorPickerPosition } from './properties';

@Directive({
    selector: '[emrColorPickerTriggerFor]',
    exportAs: 'emrColorPickerTriggerFor',
    host: {
        'class': 'emr-color-picker-trigger-for'
    }
})
export class ColorPickerTriggerForDirective {
  @Input('emrColorPickerTriggerFor')
  colorPickerTemplateRef!: TemplateRef<unknown>;

  @Input()
  position: ColorPickerPosition = 'below-center';

  @Output()
  readonly opened = new EventEmitter<void>();

  @Output()
  readonly closed = new EventEmitter<void>();

  private _overlay = inject(Overlay);
  private _elementRef: ElementRef<HTMLElement> = inject(ElementRef);
  private _directionality = inject(Directionality, { optional: true });
  private _viewContainerRef = inject(ViewContainerRef);
  private _injector = inject(Injector);
  private _portal!: TemplatePortal;
  private _overlayRef: OverlayRef | null = null;
  private _destroy$: Subject<void> = new Subject();

  constructor() {
    this._setType();
  }

  @HostListener('click', ['$event'])
  _handleClick() {
    !this._isOpen() ? this._open() : this._close();
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
    if (!this._isOpen() && this.colorPickerTemplateRef != null) {
      this.opened.emit();
      this._overlayRef = this._overlay.create(this._getOverlayConfig());
      this._overlayRef.attach(this._getPopoverContentPortal());
      this._subscribeToOutsideClicks();
    }
  }

  private _close() {
    this.closed.next();
    this._overlayRef!?.detach();
  }

  private _destroyOverlay() {
    this._overlayRef?.dispose();
    this._overlayRef = null;
  }

  private _subscribeToOutsideClicks(): void {
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
    this._portal = new TemplatePortal(
      this.colorPickerTemplateRef,
      this._viewContainerRef,
      null,
      this._injector
    );

    return this._portal;
  }

  private _getOverlayConfig() {
    return new OverlayConfig({
      positionStrategy: this._getOverlayPositionStrategy(),
      scrollStrategy: this._overlay.scrollStrategies.reposition(),
      direction: this._directionality || undefined,
      panelClass: 'emr-color-picker-overlay-panel'
    });
  }

  private _getOverlayPositionStrategy(): FlexibleConnectedPositionStrategy {
    return this._overlay
      .position()
      .flexibleConnectedTo(this._elementRef)
      .withLockedPosition()
      .withGrowAfterOpen()
      .withPositions(this._getOverlayPositions());
  }

  private _getOverlayPositions(): ConnectedPosition[] {
    return (new PositionManager()).build(this.position);
  }

  private _setType() {
    const element = this._elementRef.nativeElement;

    if (element.nodeName === 'BUTTON' && !element.getAttribute('type')) {
      // Prevents form submissions.
      element.setAttribute('type', 'button');
    }
  }
}
