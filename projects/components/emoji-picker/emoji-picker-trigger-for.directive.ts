import {
  DestroyRef,
  Directive,
  ElementRef, forwardRef,
  inject,
  Injector,
  input,
  output,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';
import { PopoverPosition } from '@elementar-ui/components/popover';
import {
  ConnectedPosition,
  FlexibleConnectedPositionStrategy,
  Overlay,
  OverlayConfig,
  OverlayRef
} from '@angular/cdk/overlay';
import { Directionality } from '@angular/cdk/bidi';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { _getEventTarget } from '@angular/cdk/platform';
import { TemplatePortal } from '@angular/cdk/portal';
import { PositionManager } from '@elementar-ui/components/overlay';
import { EMOJI_PICKER_TRIGGER_FOR } from './types';

@Directive({
  selector: '[emrEmojiPickerTriggerFor]',
  exportAs: 'emrEmojiPickerTriggerFor',
  host: {
    '(click)': '_onClick($event)'
  }
})
export class EmojiPickerTriggerForDirective {
  private _overlay = inject(Overlay);
  private _elementRef: ElementRef<HTMLElement> = inject(ElementRef);
  private _directionality = inject(Directionality, { optional: true });
  private _viewContainerRef = inject(ViewContainerRef);
  private _injector = inject(Injector);
  private _overlayRef: OverlayRef | null = null;
  private _destroyRef = inject(DestroyRef);

  for = input.required<TemplateRef<any>>({
    alias: 'emrEmojiPickerTriggerFor'
  });

  position = input<PopoverPosition>('below-start');

  readonly opened = output<void>();
  readonly closed = output<void>();

  get api() {
    return {
      close: () => this._close()
    }
  }

  protected _onClick(event: Event) {
    event.stopPropagation();
    event.preventDefault();

    this.opened.emit();
    this._overlayRef = this._overlay.create(this._getOverlayConfig());
    this._overlayRef.attach(this._getPopoverContentPortal());
    this._subscribeToOutsideClicks();
  }

  private _close() {
    this.closed.emit();
    this._overlayRef!?.detach();
  }

  private _subscribeToOutsideClicks() {
    if (this._overlayRef) {
      this._overlayRef
        .outsidePointerEvents()
        .pipe(takeUntilDestroyed(this._destroyRef))
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
    const injector = Injector.create({
      providers: [
        {
          provide: EMOJI_PICKER_TRIGGER_FOR,
          useValue: this,
        }
      ],
      parent: this._injector
    });
    return new TemplatePortal(
      this.for(),
      this._viewContainerRef,
      null,
      injector
    );
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
      .flexibleConnectedTo(this._elementRef)
      .setOrigin(this._elementRef)
      .withGrowAfterOpen()
      .withPositions(this._getOverlayPositions())
    ;
  }

  private _getOverlayPositions(): ConnectedPosition[] {
    return (new PositionManager()).build(this.position());
  }
}
