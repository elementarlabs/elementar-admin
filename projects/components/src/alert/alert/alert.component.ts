import {
  booleanAttribute,
  Component,
  ElementRef,
  inject,
  Input,
  OnInit,
  Renderer2,
  contentChild, TemplateRef, input, numberAttribute, effect, output, OnChanges, SimpleChanges
} from '@angular/core';
import { ALERT, AlertVariant } from '../alert.properties';
import { AlertIconDirective } from '../alert-icon.directive';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'emr-alert',
  exportAs: 'emrAlert',
  imports: [NgTemplateOutlet],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.scss',
  providers: [
    {
      provide: ALERT,
      useExisting: AlertComponent
    }
  ],
  host: {
    'class': 'emr-alert',
    '[class.is-bordered]': 'bordered()',
  }
})
export class AlertComponent {
  private _renderer = inject(Renderer2);
  private _elementRef = inject(ElementRef);
  readonly iconRef = contentChild(AlertIconDirective);

  autoClose = input(null, {
    transform: numberAttribute
  });
  bordered = input(false, {
    transform: booleanAttribute
  });
  variant = input<AlertVariant>('default');

  readonly closed = output<void>();
  private _autoCloseTimeout: any = undefined;

  constructor() {
    effect(() => {
      this._renderer.setAttribute(this._elementRef.nativeElement, 'emr-alert-variant', this.variant());

      clearTimeout(this._autoCloseTimeout);

      if (!this.autoClose()) {
        return;
      }

      this._autoCloseTimeout = setTimeout(() => {
        this._close();
      }, this.autoClose() as number);
    });
  }

  get api() {
    return {
      close: () => this._close()
    };
  }

  protected get iconRefTemplate(): TemplateRef<any> {
    return this.iconRef()?.templateRef as TemplateRef<any>;
  }

  private _close() {
    clearTimeout(this._autoCloseTimeout);
    this._elementRef.nativeElement.remove();
  }
}
